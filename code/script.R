require(stringr)
require(dplyr)
require(rjson)

#-----Getting Data-----
cities <- system("node data.js", intern = T)  #data.js contains console.log(citiesNames.toString()) command
cities <- strsplit(cities, ",") %>%
  unlist %>%
  subset(!str_detect(., "^[:space:][A-Z]{2}$")) %>% #remove state notations
  str_trim() %>%
  str_replace_all(" ", "-") %>%
  str_replace_all("\\(", "") %>% 
  str_replace("\\)", "") %>%
  str_replace("\\.", "")

cities[c(61, 86, 135, 152, 190, 195, 304, 384, 378, 417, 450, 544)] <- c("Hamilton-Bermuda", "San-Jose-Costa-Rica", "Burlington-Canada", "London-Canada", "Birmingham-AL", "Hamilton-New-Zealand", "Saint-Petersburg-FL", "Portland-ME", "Cairo-Egypt", "Vancouver-WA", "Melbourne-FL", "Kingston-Jamaica")

urls <- paste0("https://www.numbeo.com/cost-of-living/in/", cities, "?displayCurrency=USD") #let the server do the work :)
writeLines(toJSON(urls), "urls.json")

#WARNING: run actually from ssh, bc .bashrc doesn't get sourced in rstudio shell automatically for some reason
system("casperjs script.js") #grab from the urls prices for 1 PT ride and a month ticket 

#-----Working with data-----
prices <- fromJSON(file = "./data/data.json")
prices.df <- prices %>% as.data.frame() %>% t() %>% as.data.frame()
prices.df[,1:2] <- lapply(prices.df, function(x){
  x %>% 
    str_replace("\\$", "") %>%
    str_trim() %>%
    as.numeric()
})
prices.df$ratio <- prices.df$V2 / prices.df$V1
prices.df$city <- cities
#cleaning up
row.names(prices.df) <- NULL
prices.df <- prices.df[-c(166, 431, 452, 445, 474),]
prices.df[prices.df$city == "Odesa",]$city <- "Odessa"

#-----adding continents-----
require(countrycode)
countries.df <- read.csv("http://dev.maxmind.com/static/csv/codes/iso3166.csv")
prices.df$continent <- countrycode(prices.df$V3, origin = "country.name", destination = "continent")
prices.df$continent <- as.factor(prices.df$continent)
levels(prices.df$continent) <- c("Африка", "С. и Ю. Америки", "Азия", "Европа", "Океания")

#-----ggplot theme and some for-plot tweaking-----
my.theme <- theme(axis.ticks.x = element_line(size = 0),
                  axis.ticks.y = element_line(size = 0.15),
                  axis.text = element_text(color = "black"),
                  axis.text.x = element_text(angle = 45, size = 12, hjust = 1, margin = margin(-7,20,-8,0, "pt")),
                  axis.title.x = element_blank(),
                  axis.title.y = element_text(size = 14),
                  plot.title = element_text(size = 18),
                  panel.background = element_blank(),
                  panel.grid.major.x = element_blank(),
                  panel.grid.major.y = element_line(colour = "red", linetype = "dotted",size = 0.25),
                  panel.grid.minor.y = element_line(colour = "red", linetype = "dotted", size = 0.25),
                  plot.margin = margin(c(10,10,10,10, "pt"))
) 

#Worst places
ggplot(prices.df[order(prices.df$ratio, decreasing = T),] %>% head(n = 30), aes(reorder(city, -ratio), ratio, fill = continent)) + 
  geom_bar(stat = "identity") + 
  labs(title = "30 городов мира с самыми невыгодными месячными проездными", 
       y = "Отношение стоимости месячного проездного к стоимости одной поездки") + 
  scale_fill_manual(values = c("#7CB0D1", "#8593D6", "#81A1D3", "#F4BC58"), name = "Континент") + 
  #7CB0D1 - Africa, 8593D6 - Americas, 81A1D3 - Asia, F4BC58 - Europe
  my.theme + 
  theme(legend.position = "bottom") + 
  annotate("text", x = "Saint-Petersburg", y = 76, label = "71", size = 6) + 
  annotate("text", x = "Dar-Es-Salaam", y = 185, label = "181", size = 5) + 
  annotate("text", x = "Guangzhou", y = 156, label = "152", size = 5) + 
  annotate("text", x = "Cebu", y = 150, label = "146", size = 5)

#Best places
ggplot(prices.df[order(prices.df$ratio, decreasing = F),] %>% head(n = 30), aes(reorder(city, -ratio), ratio, fill = continent)) + 
  geom_bar(stat = "identity") + 
  labs(title = "30 городов мира с самыми выгодными месячными проездными", 
       y = "Отношение стоимости месячного проездного к стоимости одной поездки") + 
  scale_fill_manual(values = c("#8593D6", "#81A1D3", "#F4BC58", "#7587E7"), name = "Континент") +
  my.theme + 
  ylim(c(0, 50)) + 
  theme(legend.position = "bottom")


#Overall
ggplot(prices.df, aes(reorder(city, -ratio), ratio, color = is.saint.petersburg)) + 
  geom_density() + 
  scale_color_manual(values = c("gray65", "#CD5C5C")) + 
  my.theme + 
  theme(legend.position = "none", 
        axis.text.x = element_blank()
        ) + 
  labs(y = "Отношение стоимости месячного проездного к стоимости одной поездки", 
       title = "Распределение по всем городам") +
  annotate("text", x ="Saint-Petersburg", y = 75, size = 5, angle = 45, hjust = -0.03, label = "Санкт-Петербург")

#Saving plots
png("plot-3.png", width = 1000, height = 750) # repeat for each
dev.off()

#Write data
price.df.write = data.frame(city =prices.df$city,
                             one.ticket = prices.df$V1,
                             month.ticket = prices.df$V2,
                             country = prices.df$V3,
                             ratio = prices.df$ratio, row.names = NULL)
write.csv(price.df.write, "./data/transport-costs-numbeo.csv")
