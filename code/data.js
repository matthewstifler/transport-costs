var urlPrefix = 'https://www.numbeo.com/cost-of-living/';
var citiesLatLng = new Array();
var citiesNames = new Array();
var citiesUrl = new Array();
var citiesColor = new Array();
var citiesValues = new Array();
citiesNames[0] = 'Leuven';
citiesLatLng[0] = {lat: 50.877571, lng:4.704328};
citiesUrl[0] = 'https://www.numbeo.com/cost-of-living/in/Leuven';
citiesColor[0] = 15;
citiesValues[0] = 84.22;


citiesNames[1] = 'Saint Petersburg';
citiesLatLng[1] = {lat: 59.9342802, lng:30.3350986};
citiesUrl[1] = 'https://www.numbeo.com/cost-of-living/in/Saint-Petersburg';
citiesColor[1] = 3;
citiesValues[1] = 38.67;


citiesNames[2] = 'Algiers';
citiesLatLng[2] = {lat: 36.752887, lng:3.042048};
citiesUrl[2] = 'https://www.numbeo.com/cost-of-living/in/Algiers';
citiesColor[2] = 2;
citiesValues[2] = 35.31;


citiesNames[3] = 'Eugene, OR';
citiesLatLng[3] = {lat: 44.0520691, lng:-123.0867536};
citiesUrl[3] = 'https://www.numbeo.com/cost-of-living/in/Eugene';
citiesColor[3] = 10;
citiesValues[3] = 70.94;


citiesNames[4] = 'Banja Luka';
citiesLatLng[4] = {lat: 44.7715513, lng:17.1901669};
citiesUrl[4] = 'https://www.numbeo.com/cost-of-living/in/Banja-Luka';
citiesColor[4] = 2;
citiesValues[4] = 35.25;


citiesNames[5] = 'Guadalajara';
citiesLatLng[5] = {lat: 20.6596988, lng:-103.3496092};
citiesUrl[5] = 'https://www.numbeo.com/cost-of-living/in/Guadalajara';
citiesColor[5] = 1;
citiesValues[5] = 32.63;


citiesNames[6] = 'Mexico City';
citiesLatLng[6] = {lat: 19.4325301, lng:-99.1332102};
citiesUrl[6] = 'https://www.numbeo.com/cost-of-living/in/Mexico-City';
citiesColor[6] = 2;
citiesValues[6] = 37.75;


citiesNames[7] = 'Monterrey';
citiesLatLng[7] = {lat: 25.6866142, lng:-100.3161126};
citiesUrl[7] = 'https://www.numbeo.com/cost-of-living/in/Monterrey';
citiesColor[7] = 2;
citiesValues[7] = 36.69;


citiesNames[8] = 'Sarajevo';
citiesLatLng[8] = {lat: 43.8515421, lng:18.3886246};
citiesUrl[8] = 'https://www.numbeo.com/cost-of-living/in/Sarajevo';
citiesColor[8] = 2;
citiesValues[8] = 37.35;


citiesNames[9] = 'Yekaterinburg';
citiesLatLng[9] = {lat: 56.8391034, lng:60.6082502};
citiesUrl[9] = 'https://www.numbeo.com/cost-of-living/in/Yekaterinburg';
citiesColor[9] = 1;
citiesValues[9] = 34.37;


citiesNames[10] = 'Salem, OR';
citiesLatLng[10] = {lat: 44.9391565, lng:-123.033121};
citiesUrl[10] = 'https://www.numbeo.com/cost-of-living/in/Salem';
citiesColor[10] = 9;
citiesValues[10] = 69.66;


citiesNames[11] = 'Belgrade';
citiesLatLng[11] = {lat: 44.8178787, lng:20.4568089};
citiesUrl[11] = 'https://www.numbeo.com/cost-of-living/in/Belgrade';
citiesColor[11] = 2;
citiesValues[11] = 37.25;


citiesNames[12] = 'Corfu';
citiesLatLng[12] = {lat: 39.6249838, lng:19.9223461};
citiesUrl[12] = 'https://www.numbeo.com/cost-of-living/in/Corfu';
citiesColor[12] = 6;
citiesValues[12] = 54.65;


citiesNames[13] = 'Tijuana';
citiesLatLng[13] = {lat: 32.5149469, lng:-117.0382471};
citiesUrl[13] = 'https://www.numbeo.com/cost-of-living/in/Tijuana';
citiesColor[13] = 1;
citiesValues[13] = 33.82;


citiesNames[14] = 'Selangor';
citiesLatLng[14] = {lat: 3.13746885, lng:101.341848201266};
citiesUrl[14] = 'https://www.numbeo.com/cost-of-living/in/Selangor';
citiesColor[14] = 4;
citiesValues[14] = 42.32;


citiesNames[15] = 'Nassau';
citiesLatLng[15] = {lat: 25.0479835, lng:-77.355413};
citiesUrl[15] = 'https://www.numbeo.com/cost-of-living/in/Nassau';
citiesColor[15] = 16;
citiesValues[15] = 100.09;


citiesNames[16] = 'Plovdiv';
citiesLatLng[16] = {lat: 42.1354079, lng:24.7452904};
citiesUrl[16] = 'https://www.numbeo.com/cost-of-living/in/Plovdiv';
citiesColor[16] = 2;
citiesValues[16] = 35.99;


citiesNames[17] = 'Sofia';
citiesLatLng[17] = {lat: 42.6976489, lng:23.3221545};
citiesUrl[17] = 'https://www.numbeo.com/cost-of-living/in/Sofia';
citiesColor[17] = 3;
citiesValues[17] = 38.27;


citiesNames[18] = 'Varna';
citiesLatLng[18] = {lat: 43.2166104, lng:27.9017131};
citiesUrl[18] = 'https://www.numbeo.com/cost-of-living/in/Varna';
citiesColor[18] = 2;
citiesValues[18] = 36.23;


citiesNames[19] = 'Novi Sad';
citiesLatLng[19] = {lat: 45.2671352, lng:19.8335496};
citiesUrl[19] = 'https://www.numbeo.com/cost-of-living/in/Novi-Sad';
citiesColor[19] = 2;
citiesValues[19] = 34.79;


citiesNames[20] = 'Luanda';
citiesLatLng[20] = {lat: -8.8169602, lng:13.2381607};
citiesUrl[20] = 'https://www.numbeo.com/cost-of-living/in/Luanda';
citiesColor[20] = 16;
citiesValues[20] = 149.65;


citiesNames[21] = 'Malta';
citiesLatLng[21] = {lat: 42.9711869, lng:-73.7926207};
citiesUrl[21] = 'https://www.numbeo.com/cost-of-living/in/Malta';
citiesColor[21] = 8;
citiesValues[21] = 66.52;


citiesNames[22] = 'Podgorica';
citiesLatLng[22] = {lat: 42.4304196, lng:19.2593642};
citiesUrl[22] = 'https://www.numbeo.com/cost-of-living/in/Podgorica';
citiesColor[22] = 3;
citiesValues[22] = 39.31;


citiesNames[23] = 'Tokyo';
citiesLatLng[23] = {lat: 35.7090259, lng:139.7319925};
citiesUrl[23] = 'https://www.numbeo.com/cost-of-living/in/Tokyo';
citiesColor[23] = 16;
citiesValues[23] = 99.53;


citiesNames[24] = 'Osijek';
citiesLatLng[24] = {lat: 45.5549624, lng:18.6955144};
citiesUrl[24] = 'https://www.numbeo.com/cost-of-living/in/Osijek';
citiesColor[24] = 4;
citiesValues[24] = 44.15;


citiesNames[25] = 'Pula';
citiesLatLng[25] = {lat: 44.868823, lng:13.8461349};
citiesUrl[25] = 'https://www.numbeo.com/cost-of-living/in/Pula';
citiesColor[25] = 5;
citiesValues[25] = 51.83;


citiesNames[26] = 'Rijeka';
citiesLatLng[26] = {lat: 45.3271115, lng:14.4413555};
citiesUrl[26] = 'https://www.numbeo.com/cost-of-living/in/Rijeka';
citiesColor[26] = 5;
citiesValues[26] = 52.75;


citiesNames[27] = 'Almaty';
citiesLatLng[27] = {lat: 43.2220146, lng:76.8512485};
citiesUrl[27] = 'https://www.numbeo.com/cost-of-living/in/Almaty';
citiesColor[27] = 1;
citiesValues[27] = 32.07;


citiesNames[28] = 'Astana';
citiesLatLng[28] = {lat: 51.15133815, lng:71.4386151098124};
citiesUrl[28] = 'https://www.numbeo.com/cost-of-living/in/Astana';
citiesColor[28] = 1;
citiesValues[28] = 31.96;


citiesNames[29] = 'Bratislava';
citiesLatLng[29] = {lat: 48.1458923, lng:17.1071373};
citiesUrl[29] = 'https://www.numbeo.com/cost-of-living/in/Bratislava';
citiesColor[29] = 5;
citiesValues[29] = 48.29;


citiesNames[30] = 'Zagreb';
citiesLatLng[30] = {lat: 45.8150053, lng:15.9785014};
citiesUrl[30] = 'https://www.numbeo.com/cost-of-living/in/Zagreb';
citiesColor[30] = 5;
citiesValues[30] = 50.10;


citiesNames[31] = 'Limassol';
citiesLatLng[31] = {lat: 34.7071301, lng:33.0226174};
citiesUrl[31] = 'https://www.numbeo.com/cost-of-living/in/Limassol';
citiesColor[31] = 6;
citiesValues[31] = 57.61;


citiesNames[32] = 'Abu Dhabi';
citiesLatLng[32] = {lat: 24.2991738, lng:54.6972774};
citiesUrl[32] = 'https://www.numbeo.com/cost-of-living/in/Abu-Dhabi';
citiesColor[32] = 7;
citiesValues[32] = 63.10;


citiesNames[33] = 'Nicosia';
citiesLatLng[33] = {lat: 35.1855659, lng:33.38227639999999};
citiesUrl[33] = 'https://www.numbeo.com/cost-of-living/in/Nicosia';
citiesColor[33] = 7;
citiesValues[33] = 62.14;


citiesNames[34] = 'Dubai';
citiesLatLng[34] = {lat: 25.2048493, lng:55.2707828};
citiesUrl[34] = 'https://www.numbeo.com/cost-of-living/in/Dubai';
citiesColor[34] = 10;
citiesValues[34] = 70.40;


citiesNames[35] = 'Brno';
citiesLatLng[35] = {lat: 49.1909804, lng:16.6115347};
citiesUrl[35] = 'https://www.numbeo.com/cost-of-living/in/Brno';
citiesColor[35] = 3;
citiesValues[35] = 41.51;


citiesNames[36] = 'Macao';
citiesLatLng[36] = {lat: 22.1919514, lng:113.5381216};
citiesUrl[36] = 'https://www.numbeo.com/cost-of-living/in/Macao';
citiesColor[36] = 7;
citiesValues[36] = 64.37;


citiesNames[37] = 'Panama City';
citiesLatLng[37] = {lat: 9.1011785, lng:-79.4028639};
citiesUrl[37] = 'https://www.numbeo.com/cost-of-living/in/Panama-City';
citiesColor[37] = 7;
citiesValues[37] = 61.63;


citiesNames[38] = 'Olomouc';
citiesLatLng[38] = {lat: 49.5953879, lng:17.2518721};
citiesUrl[38] = 'https://www.numbeo.com/cost-of-living/in/Olomouc';
citiesColor[38] = 3;
citiesValues[38] = 38.91;


citiesNames[39] = 'Ostrava';
citiesLatLng[39] = {lat: 49.8209226, lng:18.2625243};
citiesUrl[39] = 'https://www.numbeo.com/cost-of-living/in/Ostrava';
citiesColor[39] = 3;
citiesValues[39] = 39.23;


citiesNames[40] = 'Plzen';
citiesLatLng[40] = {lat: 49.7474848, lng:13.3776036};
citiesUrl[40] = 'https://www.numbeo.com/cost-of-living/in/Plzen';
citiesColor[40] = 3;
citiesValues[40] = 41.60;


citiesNames[41] = 'Prague';
citiesLatLng[41] = {lat: 50.0755381, lng:14.4378005};
citiesUrl[41] = 'https://www.numbeo.com/cost-of-living/in/Prague';
citiesColor[41] = 4;
citiesValues[41] = 43.94;


citiesNames[42] = 'Johor Bahru';
citiesLatLng[42] = {lat: 1.4577945, lng:103.748427815775};
citiesUrl[42] = 'https://www.numbeo.com/cost-of-living/in/Johor-Bahru';
citiesColor[42] = 4;
citiesValues[42] = 42.87;


citiesNames[43] = 'Gaborone';
citiesLatLng[43] = {lat: -24.6282079, lng:25.9231471};
citiesUrl[43] = 'https://www.numbeo.com/cost-of-living/in/Gaborone';
citiesColor[43] = 3;
citiesValues[43] = 39.03;


citiesNames[44] = 'Kuala Lumpur';
citiesLatLng[44] = {lat: 3.139003, lng:101.686855};
citiesUrl[44] = 'https://www.numbeo.com/cost-of-living/in/Kuala-Lumpur';
citiesColor[44] = 4;
citiesValues[44] = 43.82;


citiesNames[45] = 'Aalborg';
citiesLatLng[45] = {lat: 57.0482206, lng:9.9193939};
citiesUrl[45] = 'https://www.numbeo.com/cost-of-living/in/Aalborg';
citiesColor[45] = 14;
citiesValues[45] = 81.86;


citiesNames[46] = 'Kuching';
citiesLatLng[46] = {lat: 1.560091, lng:110.3454137};
citiesUrl[46] = 'https://www.numbeo.com/cost-of-living/in/Kuching';
citiesColor[46] = 4;
citiesValues[46] = 43.31;


citiesNames[47] = 'Arhus';
citiesLatLng[47] = {lat: 56.162939, lng:10.203921};
citiesUrl[47] = 'https://www.numbeo.com/cost-of-living/in/Arhus';
citiesColor[47] = 14;
citiesValues[47] = 82.59;


citiesNames[48] = 'Copenhagen';
citiesLatLng[48] = {lat: 55.6760968, lng:12.5683371};
citiesUrl[48] = 'https://www.numbeo.com/cost-of-living/in/Copenhagen';
citiesColor[48] = 15;
citiesValues[48] = 87.72;


citiesNames[49] = 'Ljubljana';
citiesLatLng[49] = {lat: 46.0569465, lng:14.5057515};
citiesUrl[49] = 'https://www.numbeo.com/cost-of-living/in/Ljubljana';
citiesColor[49] = 6;
citiesValues[49] = 58.03;


citiesNames[50] = 'Maribor';
citiesLatLng[50] = {lat: 46.5573993, lng:15.645982};
citiesUrl[50] = 'https://www.numbeo.com/cost-of-living/in/Maribor';
citiesColor[50] = 5;
citiesValues[50] = 48.38;


citiesNames[51] = 'Odense';
citiesLatLng[51] = {lat: 55.403756, lng:10.40237};
citiesUrl[51] = 'https://www.numbeo.com/cost-of-living/in/Odense';
citiesColor[51] = 14;
citiesValues[51] = 81.56;


citiesNames[52] = 'Sioux Falls, SD';
citiesLatLng[52] = {lat: 43.5499749, lng:-96.700327};
citiesUrl[52] = 'https://www.numbeo.com/cost-of-living/in/Sioux-Falls';
citiesColor[52] = 11;
citiesValues[52] = 72.20;


citiesNames[53] = 'Male';
citiesLatLng[53] = {lat: 4.175, lng:73.5088889};
citiesUrl[53] = 'https://www.numbeo.com/cost-of-living/in/Male';
citiesColor[53] = 6;
citiesValues[53] = 59.30;


citiesNames[54] = 'Pisa';
citiesLatLng[54] = {lat: 43.7228386, lng:10.4016888};
citiesUrl[54] = 'https://www.numbeo.com/cost-of-living/in/Pisa';
citiesColor[54] = 15;
citiesValues[54] = 83.49;


citiesNames[55] = 'Alicante';
citiesLatLng[55] = {lat: 38.3459963, lng:-0.4906855};
citiesUrl[55] = 'https://www.numbeo.com/cost-of-living/in/Alicante';
citiesColor[55] = 6;
citiesValues[55] = 55.21;


citiesNames[56] = 'Barcelona';
citiesLatLng[56] = {lat: 41.3850639, lng:2.1734035};
citiesUrl[56] = 'https://www.numbeo.com/cost-of-living/in/Barcelona';
citiesColor[56] = 7;
citiesValues[56] = 62.50;


citiesNames[57] = 'Bilbao';
citiesLatLng[57] = {lat: 43.2629642, lng:-2.9349478};
citiesUrl[57] = 'https://www.numbeo.com/cost-of-living/in/Bilbao';
citiesColor[57] = 8;
citiesValues[57] = 64.97;


citiesNames[58] = 'Den Haag';
citiesLatLng[58] = {lat: 52.0799838, lng:4.3113461};
citiesUrl[58] = 'https://www.numbeo.com/cost-of-living/in/Den-Haag';
citiesColor[58] = 11;
citiesValues[58] = 74.39;


citiesNames[59] = 'Lima';
citiesLatLng[59] = {lat: -12.046374, lng:-77.0427934};
citiesUrl[59] = 'https://www.numbeo.com/cost-of-living/in/Lima';
citiesColor[59] = 3;
citiesValues[59] = 41.04;


citiesNames[60] = 'Hamilton';
citiesLatLng[60] = {lat: 32.294816, lng:-64.781375};
citiesUrl[60] = 'https://www.numbeo.com/cost-of-living/in/Hamilton-Bermuda';
citiesColor[60] = 16;
citiesValues[60] = 138.48;


citiesNames[61] = 'Granada';
citiesLatLng[61] = {lat: 41.6292269, lng:-1.353721};
citiesUrl[61] = 'https://www.numbeo.com/cost-of-living/in/Granada';
citiesColor[61] = 6;
citiesValues[61] = 54.17;


citiesNames[62] = 'Las Palmas';
citiesLatLng[62] = {lat: 28.1235459, lng:-15.4362574};
citiesUrl[62] = 'https://www.numbeo.com/cost-of-living/in/Las-Palmas';
citiesColor[62] = 4;
citiesValues[62] = 46.41;


citiesNames[63] = 'Ulaanbaatar';
citiesLatLng[63] = {lat: 47.88639879999999, lng:106.9057439};
citiesUrl[63] = 'https://www.numbeo.com/cost-of-living/in/Ulaanbaatar';
citiesColor[63] = 6;
citiesValues[63] = 57.61;


citiesNames[64] = 'Madrid';
citiesLatLng[64] = {lat: 40.4166909, lng:-3.7003454};
citiesUrl[64] = 'https://www.numbeo.com/cost-of-living/in/Madrid';
citiesColor[64] = 7;
citiesValues[64] = 62.00;


citiesNames[65] = 'Tallinn';
citiesLatLng[65] = {lat: 59.43696079999999, lng:24.7535746};
citiesUrl[65] = 'https://www.numbeo.com/cost-of-living/in/Tallinn';
citiesColor[65] = 5;
citiesValues[65] = 52.68;


citiesNames[66] = 'Tartu';
citiesLatLng[66] = {lat: 58.3776252, lng:26.7290063};
citiesUrl[66] = 'https://www.numbeo.com/cost-of-living/in/Tartu';
citiesColor[66] = 5;
citiesValues[66] = 49.45;


citiesNames[67] = 'Palma De Mallorca';
citiesLatLng[67] = {lat: 39.5695059, lng:2.649966};
citiesUrl[67] = 'https://www.numbeo.com/cost-of-living/in/Palma-De-Mallorca';
citiesColor[67] = 6;
citiesValues[67] = 59.94;


citiesNames[68] = 'Irvine, CA';
citiesLatLng[68] = {lat: 33.6839473, lng:-117.7946942};
citiesUrl[68] = 'https://www.numbeo.com/cost-of-living/in/Irvine';
citiesColor[68] = 14;
citiesValues[68] = 80.65;


citiesNames[69] = 'Sevilla';
citiesLatLng[69] = {lat: 37.3890924, lng:-5.9844589};
citiesUrl[69] = 'https://www.numbeo.com/cost-of-living/in/Sevilla';
citiesColor[69] = 5;
citiesValues[69] = 50.58;


citiesNames[70] = 'Valencia';
citiesLatLng[70] = {lat: 39.4702393, lng:-0.3768049};
citiesUrl[70] = 'https://www.numbeo.com/cost-of-living/in/Valencia';
citiesColor[70] = 6;
citiesValues[70] = 54.13;


citiesNames[71] = 'Navi Mumbai';
citiesLatLng[71] = {lat: 19.0330488, lng:73.0296625};
citiesUrl[71] = 'https://www.numbeo.com/cost-of-living/in/Navi-Mumbai';
citiesColor[71] = 0;
citiesValues[71] = 26.91;


citiesNames[72] = 'Zaragoza (Saragossa)';
citiesLatLng[72] = {lat: 43.5507101, lng:-7.4522774};
citiesUrl[72] = 'https://www.numbeo.com/cost-of-living/in/Zaragoza-Saragossa';
citiesColor[72] = 7;
citiesValues[72] = 61.99;


citiesNames[73] = 'San Juan';
citiesLatLng[73] = {lat: 18.4663338, lng:-66.1057217};
citiesUrl[73] = 'https://www.numbeo.com/cost-of-living/in/San-Juan';
citiesColor[73] = 10;
citiesValues[73] = 71.03;


citiesNames[74] = 'Fayetteville, AR';
citiesLatLng[74] = {lat: 36.0694725, lng:-94.2054387225566};
citiesUrl[74] = 'https://www.numbeo.com/cost-of-living/in/Fayetteville';
citiesColor[74] = 12;
citiesValues[74] = 75.33;


citiesNames[75] = 'Belo Horizonte';
citiesLatLng[75] = {lat: -19.9166813, lng:-43.9344931};
citiesUrl[75] = 'https://www.numbeo.com/cost-of-living/in/Belo-Horizonte';
citiesColor[75] = 5;
citiesValues[75] = 48.53;


citiesNames[76] = 'Uppsala';
citiesLatLng[76] = {lat: 59.85856380000001, lng:17.6389267};
citiesUrl[76] = 'https://www.numbeo.com/cost-of-living/in/Uppsala';
citiesColor[76] = 9;
citiesValues[76] = 69.00;


citiesNames[77] = 'Campinas';
citiesLatLng[77] = {lat: -22.9071048, lng:-47.0632391};
citiesUrl[77] = 'https://www.numbeo.com/cost-of-living/in/Campinas';
citiesColor[77] = 6;
citiesValues[77] = 54.93;


citiesNames[78] = 'Basel';
citiesLatLng[78] = {lat: 47.5595986, lng:7.5885761};
citiesUrl[78] = 'https://www.numbeo.com/cost-of-living/in/Basel';
citiesColor[78] = 16;
citiesValues[78] = 132.45;


citiesNames[79] = 'Bern';
citiesLatLng[79] = {lat: 46.9479986, lng:7.4481481};
citiesUrl[79] = 'https://www.numbeo.com/cost-of-living/in/Bern';
citiesColor[79] = 16;
citiesValues[79] = 117.91;


citiesNames[80] = 'Geneva';
citiesLatLng[80] = {lat: 46.2043907, lng:6.1431577};
citiesUrl[80] = 'https://www.numbeo.com/cost-of-living/in/Geneva';
citiesColor[80] = 16;
citiesValues[80] = 135.27;


citiesNames[81] = 'Providence, RI';
citiesLatLng[81] = {lat: 41.8239891, lng:-71.4128343};
citiesUrl[81] = 'https://www.numbeo.com/cost-of-living/in/Providence';
citiesColor[81] = 15;
citiesValues[81] = 84.34;


citiesNames[82] = 'Stockholm';
citiesLatLng[82] = {lat: 59.32932349999999, lng:18.0685808};
citiesUrl[82] = 'https://www.numbeo.com/cost-of-living/in/Stockholm';
citiesColor[82] = 14;
citiesValues[82] = 81.91;


citiesNames[83] = 'Buenos Aires';
citiesLatLng[83] = {lat: -34.6036844, lng:-58.3815591};
citiesUrl[83] = 'https://www.numbeo.com/cost-of-living/in/Buenos-Aires';
citiesColor[83] = 6;
citiesValues[83] = 57.77;


citiesNames[84] = 'Lausanne';
citiesLatLng[84] = {lat: 46.5196168, lng:6.6322095};
citiesUrl[84] = 'https://www.numbeo.com/cost-of-living/in/Lausanne';
citiesColor[84] = 16;
citiesValues[84] = 117.72;


citiesNames[85] = 'San Jose';
citiesLatLng[85] = {lat: 9.9280694, lng:-84.0907246};
citiesUrl[85] = 'https://www.numbeo.com/cost-of-living/in/San-Jose-Costa-Rica';
citiesColor[85] = 7;
citiesValues[85] = 61.95;


citiesNames[86] = 'Casablanca';
citiesLatLng[86] = {lat: 33.5731104, lng:-7.589843399999999};
citiesUrl[86] = 'https://www.numbeo.com/cost-of-living/in/Casablanca';
citiesColor[86] = 2;
citiesValues[86] = 37.59;


citiesNames[87] = 'Curitiba';
citiesLatLng[87] = {lat: -25.4289541, lng:-49.267137};
citiesUrl[87] = 'https://www.numbeo.com/cost-of-living/in/Curitiba';
citiesColor[87] = 5;
citiesValues[87] = 48.37;


citiesNames[88] = 'Lugano';
citiesLatLng[88] = {lat: 46.0054989, lng:8.9468486};
citiesUrl[88] = 'https://www.numbeo.com/cost-of-living/in/Lugano';
citiesColor[88] = 16;
citiesValues[88] = 116.93;


citiesNames[89] = 'Chania';
citiesLatLng[89] = {lat: 35.516236, lng:24.018807};
citiesUrl[89] = 'https://www.numbeo.com/cost-of-living/in/Chania';
citiesColor[89] = 6;
citiesValues[89] = 52.90;


citiesNames[90] = 'Lodz';
citiesLatLng[90] = {lat: 51.7592485, lng:19.4559833};
citiesUrl[90] = 'https://www.numbeo.com/cost-of-living/in/Lodz';
citiesColor[90] = 2;
citiesValues[90] = 37.00;


citiesNames[91] = 'Montreal';
citiesLatLng[91] = {lat: 45.5016889, lng:-73.567256};
citiesUrl[91] = 'https://www.numbeo.com/cost-of-living/in/Montreal';
citiesColor[91] = 9;
citiesValues[91] = 69.52;


citiesNames[92] = 'Sao Paulo';
citiesLatLng[92] = {lat: -23.5503279, lng:-46.6339647};
citiesUrl[92] = 'https://www.numbeo.com/cost-of-living/in/Sao-Paulo';
citiesColor[92] = 6;
citiesValues[92] = 55.75;


citiesNames[93] = 'Fortaleza';
citiesLatLng[93] = {lat: -3.7318616, lng:-38.5266704};
citiesUrl[93] = 'https://www.numbeo.com/cost-of-living/in/Fortaleza';
citiesColor[93] = 4;
citiesValues[93] = 46.33;


citiesNames[94] = 'Gothenburg';
citiesLatLng[94] = {lat: 57.70887, lng:11.97456};
citiesUrl[94] = 'https://www.numbeo.com/cost-of-living/in/Gothenburg';
citiesColor[94] = 11;
citiesValues[94] = 73.66;


citiesNames[95] = 'Dnipropetrovsk';
citiesLatLng[95] = {lat: 48.4680221, lng:35.0417711};
citiesUrl[95] = 'https://www.numbeo.com/cost-of-living/in/Dnipropetrovsk';
citiesColor[95] = 0;
citiesValues[95] = 26.27;


citiesNames[96] = 'Nice';
citiesLatLng[96] = {lat: 43.7034273, lng:7.2662656};
citiesUrl[96] = 'https://www.numbeo.com/cost-of-living/in/Nice';
citiesColor[96] = 13;
citiesValues[96] = 78.66;


citiesNames[97] = 'Rabat';
citiesLatLng[97] = {lat: 33.9715904, lng:-6.8498129};
citiesUrl[97] = 'https://www.numbeo.com/cost-of-living/in/Rabat';
citiesColor[97] = 3;
citiesValues[97] = 40.06;


citiesNames[98] = 'Zug';
citiesLatLng[98] = {lat: 47.1661672, lng:8.5154946};
citiesUrl[98] = 'https://www.numbeo.com/cost-of-living/in/Zug';
citiesColor[98] = 16;
citiesValues[98] = 119.07;


citiesNames[99] = 'Zurich';
citiesLatLng[99] = {lat: 47.3690239, lng:8.5380326};
citiesUrl[99] = 'https://www.numbeo.com/cost-of-living/in/Zurich';
citiesColor[99] = 16;
citiesValues[99] = 130.10;


citiesNames[100] = 'Cuneo';
citiesLatLng[100] = {lat: 44.3887987, lng:7.5471107};
citiesUrl[100] = 'https://www.numbeo.com/cost-of-living/in/Cuneo';
citiesColor[100] = 16;
citiesValues[100] = 123.72;


citiesNames[101] = 'Stavanger';
citiesLatLng[101] = {lat: 58.9680427, lng:5.7324722};
citiesUrl[101] = 'https://www.numbeo.com/cost-of-living/in/Stavanger';
citiesColor[101] = 16;
citiesValues[101] = 114.04;


citiesNames[102] = 'Ankara';
citiesLatLng[102] = {lat: 39.92077, lng:32.85411};
citiesUrl[102] = 'https://www.numbeo.com/cost-of-living/in/Ankara';
citiesColor[102] = 3;
citiesValues[102] = 42.23;


citiesNames[103] = 'Antalya';
citiesLatLng[103] = {lat: 36.8968908, lng:30.7133233};
citiesUrl[103] = 'https://www.numbeo.com/cost-of-living/in/Antalya';
citiesColor[103] = 3;
citiesValues[103] = 42.08;


citiesNames[104] = 'Pristina';
citiesLatLng[104] = {lat: 42.6577982, lng:21.1533456};
citiesUrl[104] = 'https://www.numbeo.com/cost-of-living/in/Pristina';
citiesColor[104] = 0;
citiesValues[104] = 26.94;


citiesNames[105] = 'Chattanooga, TN';
citiesLatLng[105] = {lat: 35.0456297, lng:-85.3096801};
citiesUrl[105] = 'https://www.numbeo.com/cost-of-living/in/Chattanooga';
citiesColor[105] = 10;
citiesValues[105] = 71.55;


citiesNames[106] = 'Medellin';
citiesLatLng[106] = {lat: 6.253040800000001, lng:-75.5645737};
citiesUrl[106] = 'https://www.numbeo.com/cost-of-living/in/Medellin';
citiesColor[106] = 1;
citiesValues[106] = 31.94;


citiesNames[107] = 'Bursa';
citiesLatLng[107] = {lat: 40.18257, lng:29.06687};
citiesUrl[107] = 'https://www.numbeo.com/cost-of-living/in/Bursa';
citiesColor[107] = 3;
citiesValues[107] = 40.63;


citiesNames[108] = 'Constanta';
citiesLatLng[108] = {lat: 44.1598013, lng:28.6348138};
citiesUrl[108] = 'https://www.numbeo.com/cost-of-living/in/Constanta';
citiesColor[108] = 3;
citiesValues[108] = 38.24;


citiesNames[109] = 'Pattaya';
citiesLatLng[109] = {lat: 12.9276082, lng:100.8770813};
citiesUrl[109] = 'https://www.numbeo.com/cost-of-living/in/Pattaya';
citiesColor[109] = 4;
citiesValues[109] = 43.76;


citiesNames[110] = 'Jerusalem';
citiesLatLng[110] = {lat: 31.768319, lng:35.21371};
citiesUrl[110] = 'https://www.numbeo.com/cost-of-living/in/Jerusalem';
citiesColor[110] = 13;
citiesValues[110] = 77.87;


citiesNames[111] = 'Knoxville, TN';
citiesLatLng[111] = {lat: 35.9606384, lng:-83.9207392};
citiesUrl[111] = 'https://www.numbeo.com/cost-of-living/in/Knoxville';
citiesColor[111] = 9;
citiesValues[111] = 69.67;


citiesNames[112] = 'Kingston';
citiesLatLng[112] = {lat: 44.2311717, lng:-76.4859544};
citiesUrl[112] = 'https://www.numbeo.com/cost-of-living/in/Kingston';
citiesColor[112] = 8;
citiesValues[112] = 65.90;


citiesNames[113] = 'Bellingham, WA';
citiesLatLng[113] = {lat: 48.7595529, lng:-122.4882249};
citiesUrl[113] = 'https://www.numbeo.com/cost-of-living/in/Bellingham';
citiesColor[113] = 11;
citiesValues[113] = 72.94;


citiesNames[114] = 'Malaga';
citiesLatLng[114] = {lat: 36.7196484, lng:-4.4200163};
citiesUrl[114] = 'https://www.numbeo.com/cost-of-living/in/Malaga';
citiesColor[114] = 5;
citiesValues[114] = 50.67;


citiesNames[115] = 'Istanbul';
citiesLatLng[115] = {lat: 41.0082376, lng:28.9783589};
citiesUrl[115] = 'https://www.numbeo.com/cost-of-living/in/Istanbul';
citiesColor[115] = 4;
citiesValues[115] = 47.37;


citiesNames[116] = 'Espoo';
citiesLatLng[116] = {lat: 60.2054911, lng:24.6559001};
citiesUrl[116] = 'https://www.numbeo.com/cost-of-living/in/Espoo';
citiesColor[116] = 12;
citiesValues[116] = 74.69;


citiesNames[117] = 'Porto Alegre';
citiesLatLng[117] = {lat: -30.0346471, lng:-51.2176584};
citiesUrl[117] = 'https://www.numbeo.com/cost-of-living/in/Porto-Alegre';
citiesColor[117] = 5;
citiesValues[117] = 50.50;


citiesNames[118] = 'Izmir';
citiesLatLng[118] = {lat: 38.4153421, lng:27.144474};
citiesUrl[118] = 'https://www.numbeo.com/cost-of-living/in/Izmir';
citiesColor[118] = 3;
citiesValues[118] = 41.31;


citiesNames[119] = 'Helsinki';
citiesLatLng[119] = {lat: 60.17332440000001, lng:24.9410248};
citiesUrl[119] = 'https://www.numbeo.com/cost-of-living/in/Helsinki';
citiesColor[119] = 13;
citiesValues[119] = 79.02;


citiesNames[120] = 'Asuncion';
citiesLatLng[120] = {lat: -25.2637399, lng:-57.57592599999999};
citiesUrl[120] = 'https://www.numbeo.com/cost-of-living/in/Asuncion';
citiesColor[120] = 1;
citiesValues[120] = 33.41;


citiesNames[121] = 'Recife';
citiesLatLng[121] = {lat: -8.0578381, lng:-34.8828969};
citiesUrl[121] = 'https://www.numbeo.com/cost-of-living/in/Recife';
citiesColor[121] = 5;
citiesValues[121] = 50.63;


citiesNames[122] = 'Concepcion';
citiesLatLng[122] = {lat: -36.8201352, lng:-73.0443904};
citiesUrl[122] = 'https://www.numbeo.com/cost-of-living/in/Concepcion';
citiesColor[122] = 4;
citiesValues[122] = 45.08;


citiesNames[123] = 'Rio De Janeiro';
citiesLatLng[123] = {lat: -22.9068467, lng:-43.1728965};
citiesUrl[123] = 'https://www.numbeo.com/cost-of-living/in/Rio-De-Janeiro';
citiesColor[123] = 6;
citiesValues[123] = 56.65;


citiesNames[124] = 'Kochi';
citiesLatLng[124] = {lat: 9.9312328, lng:76.26730409999999};
citiesUrl[124] = 'https://www.numbeo.com/cost-of-living/in/Kochi';
citiesColor[124] = 0;
citiesValues[124] = 23.95;


citiesNames[125] = 'Sharjah';
citiesLatLng[125] = {lat: 25.3223269, lng:55.5136433};
citiesUrl[125] = 'https://www.numbeo.com/cost-of-living/in/Sharjah';
citiesColor[125] = 7;
citiesValues[125] = 60.82;


citiesNames[126] = 'Oulu';
citiesLatLng[126] = {lat: 65.012655, lng:25.471386};
citiesUrl[126] = 'https://www.numbeo.com/cost-of-living/in/Oulu';
citiesColor[126] = 11;
citiesValues[126] = 74.43;


citiesNames[127] = 'Treviso';
citiesLatLng[127] = {lat: 45.6662855, lng:12.242072};
citiesUrl[127] = 'https://www.numbeo.com/cost-of-living/in/Treviso';
citiesColor[127] = 16;
citiesValues[127] = 96.44;


citiesNames[128] = 'Kathmandu';
citiesLatLng[128] = {lat: 27.7067577, lng:85.3153407};
citiesUrl[128] = 'https://www.numbeo.com/cost-of-living/in/Kathmandu';
citiesColor[128] = 1;
citiesValues[128] = 32.60;


citiesNames[129] = 'Cordoba';
citiesLatLng[129] = {lat: -31.3989296, lng:-64.1821289};
citiesUrl[129] = 'https://www.numbeo.com/cost-of-living/in/Cordoba';
citiesColor[129] = 6;
citiesValues[129] = 52.90;


citiesNames[130] = 'Tampere';
citiesLatLng[130] = {lat: 61.4980229, lng:23.7648591};
citiesUrl[130] = 'https://www.numbeo.com/cost-of-living/in/Tampere';
citiesColor[130] = 12;
citiesValues[130] = 76.94;


citiesNames[131] = 'Burlington, VT';
citiesLatLng[131] = {lat: 44.4758825, lng:-73.212072};
citiesUrl[131] = 'https://www.numbeo.com/cost-of-living/in/Burlington';
citiesColor[131] = 15;
citiesValues[131] = 87.25;


citiesNames[132] = 'Turku';
citiesLatLng[132] = {lat: 60.4514583, lng:22.2688319};
citiesUrl[132] = 'https://www.numbeo.com/cost-of-living/in/Turku';
citiesColor[132] = 12;
citiesValues[132] = 76.69;


citiesNames[133] = 'Barrie';
citiesLatLng[133] = {lat: 44.3787033, lng:-79.7030516};
citiesUrl[133] = 'https://www.numbeo.com/cost-of-living/in/Barrie';
citiesColor[133] = 9;
citiesValues[133] = 68.84;


citiesNames[134] = 'Burlington';
citiesLatLng[134] = {lat: 43.3487, lng:-79.7903};
citiesUrl[134] = 'https://www.numbeo.com/cost-of-living/in/Burlington-Canada';
citiesColor[134] = 9;
citiesValues[134] = 68.36;


citiesNames[135] = 'Heraklion';
citiesLatLng[135] = {lat: 35.3387352, lng:25.1442126};
citiesUrl[135] = 'https://www.numbeo.com/cost-of-living/in/Heraklion';
citiesColor[135] = 6;
citiesValues[135] = 55.65;


citiesNames[136] = 'Kharkiv';
citiesLatLng[136] = {lat: 49.99026, lng:36.2303797};
citiesUrl[136] = 'https://www.numbeo.com/cost-of-living/in/Kharkiv';
citiesColor[136] = 0;
citiesValues[136] = 26.31;


citiesNames[137] = 'Calgary';
citiesLatLng[137] = {lat: 51.0486151, lng:-114.0708459};
citiesUrl[137] = 'https://www.numbeo.com/cost-of-living/in/Calgary';
citiesColor[137] = 11;
citiesValues[137] = 73.69;


citiesNames[138] = 'Kiev';
citiesLatLng[138] = {lat: 50.4499875, lng:30.5234937};
citiesUrl[138] = 'https://www.numbeo.com/cost-of-living/in/Kiev';
citiesColor[138] = 1;
citiesValues[138] = 28.77;


citiesNames[139] = 'Grenoble';
citiesLatLng[139] = {lat: 45.182478, lng:5.7210773};
citiesUrl[139] = 'https://www.numbeo.com/cost-of-living/in/Grenoble';
citiesColor[139] = 13;
citiesValues[139] = 80.19;


citiesNames[140] = 'Brasilia';
citiesLatLng[140] = {lat: -15.7941211, lng:-47.882664};
citiesUrl[140] = 'https://www.numbeo.com/cost-of-living/in/Brasilia';
citiesColor[140] = 6;
citiesValues[140] = 54.48;


citiesNames[141] = 'Edmonton';
citiesLatLng[141] = {lat: 53.544389, lng:-113.4909267};
citiesUrl[141] = 'https://www.numbeo.com/cost-of-living/in/Edmonton';
citiesColor[141] = 10;
citiesValues[141] = 72.09;


citiesNames[142] = 'Lille';
citiesLatLng[142] = {lat: 50.6305089, lng:3.0706414};
citiesUrl[142] = 'https://www.numbeo.com/cost-of-living/in/Lille';
citiesColor[142] = 11;
citiesValues[142] = 73.17;


citiesNames[143] = 'Guelph';
citiesLatLng[143] = {lat: 43.539102, lng:-80.247622};
citiesUrl[143] = 'https://www.numbeo.com/cost-of-living/in/Guelph';
citiesColor[143] = 7;
citiesValues[143] = 63.47;


citiesNames[144] = 'Lyon';
citiesLatLng[144] = {lat: 45.764043, lng:4.835659};
citiesUrl[144] = 'https://www.numbeo.com/cost-of-living/in/Lyon';
citiesColor[144] = 13;
citiesValues[144] = 78.36;


citiesNames[145] = 'Hamilton';
citiesLatLng[145] = {lat: 43.25002080000001, lng:-79.8660914};
citiesUrl[145] = 'https://www.numbeo.com/cost-of-living/in/Hamilton';
citiesColor[145] = 6;
citiesValues[145] = 59.01;


citiesNames[146] = 'Marseille';
citiesLatLng[146] = {lat: 43.296482, lng:5.36978};
citiesUrl[146] = 'https://www.numbeo.com/cost-of-living/in/Marseille';
citiesColor[146] = 7;
citiesValues[146] = 63.26;


citiesNames[147] = 'Halifax';
citiesLatLng[147] = {lat: 44.648881, lng:-63.575312};
citiesUrl[147] = 'https://www.numbeo.com/cost-of-living/in/Halifax';
citiesColor[147] = 12;
citiesValues[147] = 74.69;


citiesNames[148] = 'Kelowna';
citiesLatLng[148] = {lat: 49.8876629, lng:-119.4961612};
citiesUrl[148] = 'https://www.numbeo.com/cost-of-living/in/Kelowna';
citiesColor[148] = 7;
citiesValues[148] = 64.32;


citiesNames[149] = 'Montpellier';
citiesLatLng[149] = {lat: 43.610769, lng:3.876716};
citiesUrl[149] = 'https://www.numbeo.com/cost-of-living/in/Montpellier';
citiesColor[149] = 12;
citiesValues[149] = 75.37;


citiesNames[150] = 'Kitchener';
citiesLatLng[150] = {lat: 43.4129238, lng:-80.47714719999999};
citiesUrl[150] = 'https://www.numbeo.com/cost-of-living/in/Kitchener';
citiesColor[150] = 6;
citiesValues[150] = 60.18;


citiesNames[151] = 'London';
citiesLatLng[151] = {lat: 42.988097, lng:-81.2460295};
citiesUrl[151] = 'https://www.numbeo.com/cost-of-living/in/London-Canada';
citiesColor[151] = 9;
citiesValues[151] = 69.99;


citiesNames[152] = 'Nantes';
citiesLatLng[152] = {lat: 47.218371, lng:-1.553621};
citiesUrl[152] = 'https://www.numbeo.com/cost-of-living/in/Nantes';
citiesColor[152] = 9;
citiesValues[152] = 68.05;


citiesNames[153] = 'Odesa';
citiesLatLng[153] = {lat: 46.4713468, lng:30.7296333};
citiesUrl[153] = 'https://www.numbeo.com/cost-of-living/in/Odesa';
citiesColor[153] = 1;
citiesValues[153] = 29.25;


citiesNames[154] = 'Thiruvananthapuram';
citiesLatLng[154] = {lat: 8.5241391, lng:76.9366376};
citiesUrl[154] = 'https://www.numbeo.com/cost-of-living/in/Thiruvananthapuram';
citiesColor[154] = 0;
citiesValues[154] = 20.34;


citiesNames[155] = 'Paris';
citiesLatLng[155] = {lat: 48.8566667, lng:2.3509871};
citiesUrl[155] = 'https://www.numbeo.com/cost-of-living/in/Paris';
citiesColor[155] = 14;
citiesValues[155] = 82.70;


citiesNames[156] = 'Mississauga';
citiesLatLng[156] = {lat: 43.5892854, lng:-79.6441646};
citiesUrl[156] = 'https://www.numbeo.com/cost-of-living/in/Mississauga';
citiesColor[156] = 9;
citiesValues[156] = 69.02;


citiesNames[157] = 'Tromso';
citiesLatLng[157] = {lat: 69.6492047, lng:18.9553238};
citiesUrl[157] = 'https://www.numbeo.com/cost-of-living/in/Tromso';
citiesColor[157] = 16;
citiesValues[157] = 115.79;


citiesNames[158] = 'Moncton';
citiesLatLng[158] = {lat: 46.0878165, lng:-64.7782313};
citiesUrl[158] = 'https://www.numbeo.com/cost-of-living/in/Moncton';
citiesColor[158] = 8;
citiesValues[158] = 65.24;


citiesNames[159] = 'Strasbourg';
citiesLatLng[159] = {lat: 48.5734053, lng:7.752111299999999};
citiesUrl[159] = 'https://www.numbeo.com/cost-of-living/in/Strasbourg';
citiesColor[159] = 14;
citiesValues[159] = 80.76;


citiesNames[160] = 'Ottawa';
citiesLatLng[160] = {lat: 45.4215296, lng:-75.69719309999999};
citiesUrl[160] = 'https://www.numbeo.com/cost-of-living/in/Ottawa';
citiesColor[160] = 8;
citiesValues[160] = 66.87;


citiesNames[161] = 'Thessaloniki';
citiesLatLng[161] = {lat: 40.6400629, lng:22.9444191};
citiesUrl[161] = 'https://www.numbeo.com/cost-of-living/in/Thessaloniki';
citiesColor[161] = 6;
citiesValues[161] = 56.56;


citiesNames[162] = 'Regina';
citiesLatLng[162] = {lat: 50.4452112, lng:-104.6188944};
citiesUrl[162] = 'https://www.numbeo.com/cost-of-living/in/Regina';
citiesColor[162] = 9;
citiesValues[162] = 69.68;


citiesNames[163] = 'Kosice';
citiesLatLng[163] = {lat: 48.72100529999999, lng:21.2577999};
citiesUrl[163] = 'https://www.numbeo.com/cost-of-living/in/Kosice';
citiesColor[163] = 4;
citiesValues[163] = 45.34;


citiesNames[164] = 'Toulouse';
citiesLatLng[164] = {lat: 43.604652, lng:1.444209};
citiesUrl[164] = 'https://www.numbeo.com/cost-of-living/in/Toulouse';
citiesColor[164] = 12;
citiesValues[164] = 76.09;


citiesNames[165] = 'Sumy';
citiesLatLng[165] = {lat: 50.9077, lng:34.7981};
citiesUrl[165] = 'https://www.numbeo.com/cost-of-living/in/Sumy';
citiesColor[165] = 0;
citiesValues[165] = 24.15;


citiesNames[166] = 'Akron, OH';
citiesLatLng[166] = {lat: 41.0814447, lng:-81.5190053};
citiesUrl[166] = 'https://www.numbeo.com/cost-of-living/in/Akron';
citiesColor[166] = 15;
citiesValues[166] = 86.70;


citiesNames[167] = 'Albuquerque, NM';
citiesLatLng[167] = {lat: 35.0844909, lng:-106.6511367};
citiesUrl[167] = 'https://www.numbeo.com/cost-of-living/in/Albuquerque';
citiesColor[167] = 8;
citiesValues[167] = 65.57;


citiesNames[168] = 'Aachen';
citiesLatLng[168] = {lat: 50.7754385, lng:6.0815102};
citiesUrl[168] = 'https://www.numbeo.com/cost-of-living/in/Aachen';
citiesColor[168] = 7;
citiesValues[168] = 60.92;


citiesNames[169] = 'Split';
citiesLatLng[169] = {lat: 43.5115555, lng:16.4396801};
citiesUrl[169] = 'https://www.numbeo.com/cost-of-living/in/Split';
citiesColor[169] = 5;
citiesValues[169] = 52.14;


citiesNames[170] = 'Anchorage, AK';
citiesLatLng[170] = {lat: 61.2180556, lng:-149.9002778};
citiesUrl[170] = 'https://www.numbeo.com/cost-of-living/in/Anchorage';
citiesColor[170] = 16;
citiesValues[170] = 96.29;


citiesNames[171] = 'Saskatoon';
citiesLatLng[171] = {lat: 52.1303794, lng:-106.6605124};
citiesUrl[171] = 'https://www.numbeo.com/cost-of-living/in/Saskatoon';
citiesColor[171] = 11;
citiesValues[171] = 73.03;


citiesNames[172] = 'Arlington, VA';
citiesLatLng[172] = {lat: 38.8799697, lng:-77.1067698};
citiesUrl[172] = 'https://www.numbeo.com/cost-of-living/in/Arlington';
citiesColor[172] = 15;
citiesValues[172] = 86.30;


citiesNames[173] = 'Windhoek';
citiesLatLng[173] = {lat: -22.5744184, lng:17.0791233};
citiesUrl[173] = 'https://www.numbeo.com/cost-of-living/in/Windhoek';
citiesColor[173] = 4;
citiesValues[173] = 43.44;


citiesNames[174] = 'Aberdeen';
citiesLatLng[174] = {lat: 57.149717, lng:-2.094278};
citiesUrl[174] = 'https://www.numbeo.com/cost-of-living/in/Aberdeen';
citiesColor[174] = 13;
citiesValues[174] = 79.84;


citiesNames[175] = 'Atlanta, GA';
citiesLatLng[175] = {lat: 33.7490987, lng:-84.3901849};
citiesUrl[175] = 'https://www.numbeo.com/cost-of-living/in/Atlanta';
citiesColor[175] = 12;
citiesValues[175] = 74.49;


citiesNames[176] = 'Berlin';
citiesLatLng[176] = {lat: 52.52000659999999, lng:13.404954};
citiesUrl[176] = 'https://www.numbeo.com/cost-of-living/in/Berlin';
citiesColor[176] = 8;
citiesValues[176] = 65.39;


citiesNames[177] = 'Surrey';
citiesLatLng[177] = {lat: 49.1044302, lng:-122.801094};
citiesUrl[177] = 'https://www.numbeo.com/cost-of-living/in/Surrey';
citiesColor[177] = 8;
citiesValues[177] = 64.92;


citiesNames[178] = 'Austin, TX';
citiesLatLng[178] = {lat: 30.267153, lng:-97.7430608};
citiesUrl[178] = 'https://www.numbeo.com/cost-of-living/in/Austin';
citiesColor[178] = 9;
citiesValues[178] = 69.63;


citiesNames[179] = 'Auckland';
citiesLatLng[179] = {lat: -36.8484597, lng:174.7633315};
citiesUrl[179] = 'https://www.numbeo.com/cost-of-living/in/Auckland';
citiesColor[179] = 15;
citiesValues[179] = 85.16;


citiesNames[180] = 'Toronto';
citiesLatLng[180] = {lat: 43.6529206, lng:-79.3849008};
citiesUrl[180] = 'https://www.numbeo.com/cost-of-living/in/Toronto';
citiesColor[180] = 9;
citiesValues[180] = 68.60;


citiesNames[181] = 'Bonn';
citiesLatLng[181] = {lat: 50.7327045, lng:7.0963113};
citiesUrl[181] = 'https://www.numbeo.com/cost-of-living/in/Bonn';
citiesColor[181] = 7;
citiesValues[181] = 64.57;


citiesNames[182] = 'Bakersfield, CA';
citiesLatLng[182] = {lat: 35.3732921, lng:-119.0187125};
citiesUrl[182] = 'https://www.numbeo.com/cost-of-living/in/Bakersfield';
citiesColor[182] = 11;
citiesValues[182] = 72.74;


citiesNames[183] = 'Vancouver';
citiesLatLng[183] = {lat: 49.2827291, lng:-123.1207375};
citiesUrl[183] = 'https://www.numbeo.com/cost-of-living/in/Vancouver';
citiesColor[183] = 10;
citiesValues[183] = 70.09;


citiesNames[184] = 'Baltimore, MD';
citiesLatLng[184] = {lat: 39.2903848, lng:-76.6121893};
citiesUrl[184] = 'https://www.numbeo.com/cost-of-living/in/Baltimore';
citiesColor[184] = 13;
citiesValues[184] = 77.99;


citiesNames[185] = 'Christchurch';
citiesLatLng[185] = {lat: -43.531637, lng:172.636645};
citiesUrl[185] = 'https://www.numbeo.com/cost-of-living/in/Christchurch';
citiesColor[185] = 14;
citiesValues[185] = 80.95;


citiesNames[186] = 'Victoria';
citiesLatLng[186] = {lat: 48.4286111, lng:-123.3655556};
citiesUrl[186] = 'https://www.numbeo.com/cost-of-living/in/Victoria';
citiesColor[186] = 10;
citiesValues[186] = 70.93;


citiesNames[187] = 'Savannah, GA';
citiesLatLng[187] = {lat: 32.0835407, lng:-81.0998342};
citiesUrl[187] = 'https://www.numbeo.com/cost-of-living/in/Savannah';
citiesColor[187] = 10;
citiesValues[187] = 70.39;


citiesNames[188] = 'Bremen';
citiesLatLng[188] = {lat: 53.074981, lng:8.807081};
citiesUrl[188] = 'https://www.numbeo.com/cost-of-living/in/Bremen';
citiesColor[188] = 7;
citiesValues[188] = 60.79;


citiesNames[189] = 'Birmingham, AL';
citiesLatLng[189] = {lat: 33.5206608, lng:-86.80249};
citiesUrl[189] = 'https://www.numbeo.com/cost-of-living/in/Birmingham-AL';
citiesColor[189] = 11;
citiesValues[189] = 73.41;


citiesNames[190] = 'Windsor';
citiesLatLng[190] = {lat: 42.3149367, lng:-83.03636329999999};
citiesUrl[190] = 'https://www.numbeo.com/cost-of-living/in/Windsor';
citiesColor[190] = 10;
citiesValues[190] = 70.37;


citiesNames[191] = 'Belfast';
citiesLatLng[191] = {lat: 54.5972686, lng:-5.9301088};
citiesUrl[191] = 'https://www.numbeo.com/cost-of-living/in/Belfast';
citiesColor[191] = 6;
citiesValues[191] = 60.14;


citiesNames[192] = 'Winnipeg';
citiesLatLng[192] = {lat: 49.8997541, lng:-97.1374937};
citiesUrl[192] = 'https://www.numbeo.com/cost-of-living/in/Winnipeg';
citiesColor[192] = 8;
citiesValues[192] = 67.82;


citiesNames[193] = 'Boise, ID';
citiesLatLng[193] = {lat: 43.6187102, lng:-116.2146068};
citiesUrl[193] = 'https://www.numbeo.com/cost-of-living/in/Boise';
citiesColor[193] = 7;
citiesValues[193] = 64.71;


citiesNames[194] = 'Hamilton';
citiesLatLng[194] = {lat: -37.7870012, lng:175.279253};
citiesUrl[194] = 'https://www.numbeo.com/cost-of-living/in/Hamilton-New-Zealand';
citiesColor[194] = 15;
citiesValues[194] = 88.04;


citiesNames[195] = 'Boston, MA';
citiesLatLng[195] = {lat: 42.35892, lng:-71.05781};
citiesUrl[195] = 'https://www.numbeo.com/cost-of-living/in/Boston';
citiesColor[195] = 15;
citiesValues[195] = 86.07;


citiesNames[196] = 'Birmingham';
citiesLatLng[196] = {lat: 52.48624299999999, lng:-1.890401};
citiesUrl[196] = 'https://www.numbeo.com/cost-of-living/in/Birmingham';
citiesColor[196] = 8;
citiesValues[196] = 65.03;


citiesNames[197] = 'Cologne';
citiesLatLng[197] = {lat: 50.9374863, lng:6.9580232};
citiesUrl[197] = 'https://www.numbeo.com/cost-of-living/in/Cologne';
citiesColor[197] = 9;
citiesValues[197] = 69.35;


citiesNames[198] = 'Buffalo, NY';
citiesLatLng[198] = {lat: 42.8864468, lng:-78.8783689};
citiesUrl[198] = 'https://www.numbeo.com/cost-of-living/in/Buffalo';
citiesColor[198] = 12;
citiesValues[198] = 75.35;


citiesNames[199] = 'Charlotte, NC';
citiesLatLng[199] = {lat: 35.2270869, lng:-80.8431267};
citiesUrl[199] = 'https://www.numbeo.com/cost-of-living/in/Charlotte';
citiesColor[199] = 12;
citiesValues[199] = 74.83;


citiesNames[200] = 'Bournemouth';
citiesLatLng[200] = {lat: 50.7216814, lng:-1.8785266};
citiesUrl[200] = 'https://www.numbeo.com/cost-of-living/in/Bournemouth';
citiesColor[200] = 12;
citiesValues[200] = 74.65;


citiesNames[201] = 'Chicago, IL';
citiesLatLng[201] = {lat: 41.8781136, lng:-87.6297982};
citiesUrl[201] = 'https://www.numbeo.com/cost-of-living/in/Chicago';
citiesColor[201] = 15;
citiesValues[201] = 85.28;


citiesNames[202] = 'Bristol';
citiesLatLng[202] = {lat: 51.4553129, lng:-2.5919023};
citiesUrl[202] = 'https://www.numbeo.com/cost-of-living/in/Bristol';
citiesColor[202] = 10;
citiesValues[202] = 70.86;


citiesNames[203] = 'Dresden';
citiesLatLng[203] = {lat: 51.0493286, lng:13.7381437};
citiesUrl[203] = 'https://www.numbeo.com/cost-of-living/in/Dresden';
citiesColor[203] = 7;
citiesValues[203] = 62.57;


citiesNames[204] = 'Cleveland, OH';
citiesLatLng[204] = {lat: 41.49932, lng:-81.6943605};
citiesUrl[204] = 'https://www.numbeo.com/cost-of-living/in/Cleveland';
citiesColor[204] = 12;
citiesValues[204] = 76.16;


citiesNames[205] = 'Colorado Springs, CO';
citiesLatLng[205] = {lat: 38.8338816, lng:-104.8213634};
citiesUrl[205] = 'https://www.numbeo.com/cost-of-living/in/Colorado-Springs';
citiesColor[205] = 11;
citiesValues[205] = 74.35;


citiesNames[206] = 'Cambridge';
citiesLatLng[206] = {lat: 52.205337, lng:0.121817};
citiesUrl[206] = 'https://www.numbeo.com/cost-of-living/in/Cambridge';
citiesColor[206] = 11;
citiesValues[206] = 72.74;


citiesNames[207] = 'Frankfurt';
citiesLatLng[207] = {lat: 50.12134215, lng:8.66195118582712};
citiesUrl[207] = 'https://www.numbeo.com/cost-of-living/in/Frankfurt';
citiesColor[207] = 12;
citiesValues[207] = 76.57;


citiesNames[208] = 'Columbus, OH';
citiesLatLng[208] = {lat: 39.962208, lng:-83.000676};
citiesUrl[208] = 'https://www.numbeo.com/cost-of-living/in/Columbus';
citiesColor[208] = 10;
citiesValues[208] = 71.53;


citiesNames[209] = 'Cardiff';
citiesLatLng[209] = {lat: 51.4835299, lng:-3.1836873};
citiesUrl[209] = 'https://www.numbeo.com/cost-of-living/in/Cardiff';
citiesColor[209] = 7;
citiesValues[209] = 63.87;


citiesNames[210] = 'Corpus Christi, TX';
citiesLatLng[210] = {lat: 27.8005828, lng:-97.396381};
citiesUrl[210] = 'https://www.numbeo.com/cost-of-living/in/Corpus-Christi';
citiesColor[210] = 15;
citiesValues[210] = 83.90;


citiesNames[211] = 'Dallas, TX';
citiesLatLng[211] = {lat: 32.7761963, lng:-96.7968994};
citiesUrl[211] = 'https://www.numbeo.com/cost-of-living/in/Dallas';
citiesColor[211] = 9;
citiesValues[211] = 69.24;


citiesNames[212] = 'Denver, CO';
citiesLatLng[212] = {lat: 39.7391536, lng:-104.9847034};
citiesUrl[212] = 'https://www.numbeo.com/cost-of-living/in/Denver';
citiesColor[212] = 14;
citiesValues[212] = 81.10;


citiesNames[213] = 'Des Moines, IA';
citiesLatLng[213] = {lat: 41.6005448, lng:-93.6091064};
citiesUrl[213] = 'https://www.numbeo.com/cost-of-living/in/Des-Moines';
citiesColor[213] = 13;
citiesValues[213] = 78.43;


citiesNames[214] = 'Coventry';
citiesLatLng[214] = {lat: 52.406822, lng:-1.519693};
citiesUrl[214] = 'https://www.numbeo.com/cost-of-living/in/Coventry';
citiesColor[214] = 7;
citiesValues[214] = 63.97;


citiesNames[215] = 'Tauranga';
citiesLatLng[215] = {lat: -37.6877975, lng:176.1651295};
citiesUrl[215] = 'https://www.numbeo.com/cost-of-living/in/Tauranga';
citiesColor[215] = 14;
citiesValues[215] = 81.07;


citiesNames[216] = 'Detroit, MI';
citiesLatLng[216] = {lat: 42.331427, lng:-83.0457538};
citiesUrl[216] = 'https://www.numbeo.com/cost-of-living/in/Detroit';
citiesColor[216] = 12;
citiesValues[216] = 77.43;


citiesNames[217] = 'Hamburg';
citiesLatLng[217] = {lat: 53.5510846, lng:9.9936818};
citiesUrl[217] = 'https://www.numbeo.com/cost-of-living/in/Hamburg';
citiesColor[217] = 12;
citiesValues[217] = 76.49;


citiesNames[218] = 'Durham, NC';
citiesLatLng[218] = {lat: 35.9940329, lng:-78.898619};
citiesUrl[218] = 'https://www.numbeo.com/cost-of-living/in/Durham';
citiesColor[218] = 11;
citiesValues[218] = 73.23;


citiesNames[219] = 'Playa del Carmen';
citiesLatLng[219] = {lat: 20.628505, lng:-87.079752};
citiesUrl[219] = 'https://www.numbeo.com/cost-of-living/in/Playa-del-Carmen';
citiesColor[219] = 2;
citiesValues[219] = 35.91;


citiesNames[220] = 'Bolzano-Bozen';
citiesLatLng[220] = {lat: 46.4980632, lng:11.3540184};
citiesUrl[220] = 'https://www.numbeo.com/cost-of-living/in/Bolzano-Bozen';
citiesColor[220] = 14;
citiesValues[220] = 81.06;


citiesNames[221] = 'Fort Worth, TX';
citiesLatLng[221] = {lat: 32.753177, lng:-97.3327459};
citiesUrl[221] = 'https://www.numbeo.com/cost-of-living/in/Fort-Worth';
citiesColor[221] = 10;
citiesValues[221] = 71.42;


citiesNames[222] = 'Charleston, SC';
citiesLatLng[222] = {lat: 32.7765656, lng:-79.9309216};
citiesUrl[222] = 'https://www.numbeo.com/cost-of-living/in/Charleston';
citiesColor[222] = 15;
citiesValues[222] = 85.29;


citiesNames[223] = 'Wellington';
citiesLatLng[223] = {lat: -41.28648, lng:174.776217};
citiesUrl[223] = 'https://www.numbeo.com/cost-of-living/in/Wellington';
citiesColor[223] = 13;
citiesValues[223] = 78.80;


citiesNames[224] = 'Fremont, CA';
citiesLatLng[224] = {lat: 37.5482697, lng:-121.9885719};
citiesUrl[224] = 'https://www.numbeo.com/cost-of-living/in/Fremont';
citiesColor[224] = 10;
citiesValues[224] = 70.04;


citiesNames[225] = 'Dundee';
citiesLatLng[225] = {lat: 56.4614282, lng:-2.9681109};
citiesUrl[225] = 'https://www.numbeo.com/cost-of-living/in/Dundee';
citiesColor[225] = 7;
citiesValues[225] = 62.50;


citiesNames[226] = 'Fresno, CA';
citiesLatLng[226] = {lat: 36.7477272, lng:-119.7723661};
citiesUrl[226] = 'https://www.numbeo.com/cost-of-living/in/Fresno';
citiesColor[226] = 11;
citiesValues[226] = 73.15;


citiesNames[227] = 'Waterloo';
citiesLatLng[227] = {lat: 43.4655524, lng:-80.5217786};
citiesUrl[227] = 'https://www.numbeo.com/cost-of-living/in/Waterloo';
citiesColor[227] = 12;
citiesValues[227] = 77.49;


citiesNames[228] = 'Santiago';
citiesLatLng[228] = {lat: -33.4488897, lng:-70.6692655};
citiesUrl[228] = 'https://www.numbeo.com/cost-of-living/in/Santiago';
citiesColor[228] = 5;
citiesValues[228] = 52.84;


citiesNames[229] = 'Fort Collins, CO';
citiesLatLng[229] = {lat: 40.5852602, lng:-105.084423};
citiesUrl[229] = 'https://www.numbeo.com/cost-of-living/in/Fort-Collins';
citiesColor[229] = 15;
citiesValues[229] = 83.31;


citiesNames[230] = 'Grand Rapids, MI';
citiesLatLng[230] = {lat: 42.9633599, lng:-85.6680863};
citiesUrl[230] = 'https://www.numbeo.com/cost-of-living/in/Grand-Rapids';
citiesColor[230] = 12;
citiesValues[230] = 75.53;


citiesNames[231] = 'Edinburgh';
citiesLatLng[231] = {lat: 55.953252, lng:-3.188267};
citiesUrl[231] = 'https://www.numbeo.com/cost-of-living/in/Edinburgh';
citiesColor[231] = 11;
citiesValues[231] = 72.95;


citiesNames[232] = 'Karlsruhe';
citiesLatLng[232] = {lat: 49.0080848, lng:8.4037563};
citiesUrl[232] = 'https://www.numbeo.com/cost-of-living/in/Karlsruhe';
citiesColor[232] = 10;
citiesValues[232] = 70.87;


citiesNames[233] = 'Merida';
citiesLatLng[233] = {lat: 20.9673702, lng:-89.5925857};
citiesUrl[233] = 'https://www.numbeo.com/cost-of-living/in/Merida';
citiesColor[233] = 1;
citiesValues[233] = 34.21;


citiesNames[234] = 'Greensboro, NC';
citiesLatLng[234] = {lat: 36.0726354, lng:-79.7919754};
citiesUrl[234] = 'https://www.numbeo.com/cost-of-living/in/Greensboro';
citiesColor[234] = 13;
citiesValues[234] = 79.29;


citiesNames[235] = 'Exeter';
citiesLatLng[235] = {lat: 50.718412, lng:-3.533899};
citiesUrl[235] = 'https://www.numbeo.com/cost-of-living/in/Exeter';
citiesColor[235] = 8;
citiesValues[235] = 66.74;


citiesNames[236] = 'Fort McMurray';
citiesLatLng[236] = {lat: 56.7234442, lng:-111.37432};
citiesUrl[236] = 'https://www.numbeo.com/cost-of-living/in/Fort-McMurray';
citiesColor[236] = 14;
citiesValues[236] = 83.19;


citiesNames[237] = 'Glasgow';
citiesLatLng[237] = {lat: 55.861147, lng:-4.2499891};
citiesUrl[237] = 'https://www.numbeo.com/cost-of-living/in/Glasgow';
citiesColor[237] = 8;
citiesValues[237] = 67.60;


citiesNames[238] = 'Honolulu, HI';
citiesLatLng[238] = {lat: 21.3069444, lng:-157.8583333};
citiesUrl[238] = 'https://www.numbeo.com/cost-of-living/in/Honolulu';
citiesColor[238] = 16;
citiesValues[238] = 95.81;


citiesNames[239] = 'Houston, TX';
citiesLatLng[239] = {lat: 29.7604267, lng:-95.3698028};
citiesUrl[239] = 'https://www.numbeo.com/cost-of-living/in/Houston';
citiesColor[239] = 10;
citiesValues[239] = 71.78;


citiesNames[240] = 'Leipzig';
citiesLatLng[240] = {lat: 51.3396955, lng:12.3730747};
citiesUrl[240] = 'https://www.numbeo.com/cost-of-living/in/Leipzig';
citiesColor[240] = 8;
citiesValues[240] = 65.06;


citiesNames[241] = 'Indianapolis, IN';
citiesLatLng[241] = {lat: 39.7683765, lng:-86.1580423};
citiesUrl[241] = 'https://www.numbeo.com/cost-of-living/in/Indianapolis';
citiesColor[241] = 11;
citiesValues[241] = 74.10;


citiesNames[242] = 'Mannheim';
citiesLatLng[242] = {lat: 49.4895914, lng:8.4672361};
citiesUrl[242] = 'https://www.numbeo.com/cost-of-living/in/Mannheim';
citiesColor[242] = 9;
citiesValues[242] = 68.59;


citiesNames[243] = 'Bogota';
citiesLatLng[243] = {lat: 4.710988599999999, lng:-74.072092};
citiesUrl[243] = 'https://www.numbeo.com/cost-of-living/in/Bogota';
citiesColor[243] = 2;
citiesValues[243] = 36.36;


citiesNames[244] = 'Jackson, MS';
citiesLatLng[244] = {lat: 32.2987573, lng:-90.1848103};
citiesUrl[244] = 'https://www.numbeo.com/cost-of-living/in/Jackson';
citiesColor[244] = 15;
citiesValues[244] = 84.01;


citiesNames[245] = 'Jacksonville, FL';
citiesLatLng[245] = {lat: 30.3321838, lng:-81.655651};
citiesUrl[245] = 'https://www.numbeo.com/cost-of-living/in/Jacksonville';
citiesColor[245] = 12;
citiesValues[245] = 74.50;


citiesNames[246] = 'Munich';
citiesLatLng[246] = {lat: 48.1351253, lng:11.5819806};
citiesUrl[246] = 'https://www.numbeo.com/cost-of-living/in/Munich';
citiesColor[246] = 11;
citiesValues[246] = 73.32;


citiesNames[247] = 'Jersey City, NJ';
citiesLatLng[247] = {lat: 40.7281575, lng:-74.0776417};
citiesUrl[247] = 'https://www.numbeo.com/cost-of-living/in/Jersey-City';
citiesColor[247] = 13;
citiesValues[247] = 78.02;


citiesNames[248] = 'Leeds';
citiesLatLng[248] = {lat: 53.8007554, lng:-1.5490774};
citiesUrl[248] = 'https://www.numbeo.com/cost-of-living/in/Leeds';
citiesColor[248] = 7;
citiesValues[248] = 64.55;


citiesNames[249] = 'Cali';
citiesLatLng[249] = {lat: 3.4516467, lng:-76.5319854};
citiesUrl[249] = 'https://www.numbeo.com/cost-of-living/in/Cali';
citiesColor[249] = 1;
citiesValues[249] = 29.05;


citiesNames[250] = 'Kansas City, MO';
citiesLatLng[250] = {lat: 39.0997265, lng:-94.5785667};
citiesUrl[250] = 'https://www.numbeo.com/cost-of-living/in/Kansas-City';
citiesColor[250] = 8;
citiesValues[250] = 67.42;


citiesNames[251] = 'Leicester';
citiesLatLng[251] = {lat: 52.6368778, lng:-1.1397592};
citiesUrl[251] = 'https://www.numbeo.com/cost-of-living/in/Leicester';
citiesColor[251] = 8;
citiesValues[251] = 67.24;


citiesNames[252] = 'Las Vegas, NV';
citiesLatLng[252] = {lat: 36.1699412, lng:-115.1398296};
citiesUrl[252] = 'https://www.numbeo.com/cost-of-living/in/Las-Vegas';
citiesColor[252] = 10;
citiesValues[252] = 71.24;


citiesNames[253] = 'Nuremberg';
citiesLatLng[253] = {lat: 49.4538723, lng:11.0772978};
citiesUrl[253] = 'https://www.numbeo.com/cost-of-living/in/Nuremberg';
citiesColor[253] = 8;
citiesValues[253] = 64.82;


citiesNames[254] = 'The Hague';
citiesLatLng[254] = {lat: 52.0704978, lng:4.3006999};
citiesUrl[254] = 'https://www.numbeo.com/cost-of-living/in/The-Hague';
citiesColor[254] = 12;
citiesValues[254] = 77.84;


citiesNames[255] = 'London';
citiesLatLng[255] = {lat: 51.5072759, lng:-0.1276597};
citiesUrl[255] = 'https://www.numbeo.com/cost-of-living/in/London';
citiesColor[255] = 14;
citiesValues[255] = 82.66;


citiesNames[256] = 'Harrisburg, PA';
citiesLatLng[256] = {lat: 40.2737002, lng:-76.8844179};
citiesUrl[256] = 'https://www.numbeo.com/cost-of-living/in/Harrisburg';
citiesColor[256] = 12;
citiesValues[256] = 75.66;


citiesNames[257] = 'Little Rock, AR';
citiesLatLng[257] = {lat: 34.7464809, lng:-92.2895948};
citiesUrl[257] = 'https://www.numbeo.com/cost-of-living/in/Little-Rock';
citiesColor[257] = 10;
citiesValues[257] = 71.63;


citiesNames[258] = 'Los Angeles, CA';
citiesLatLng[258] = {lat: 34.0522342, lng:-118.2436849};
citiesUrl[258] = 'https://www.numbeo.com/cost-of-living/in/Los-Angeles';
citiesColor[258] = 13;
citiesValues[258] = 79.02;


citiesNames[259] = 'Louisville, KY';
citiesLatLng[259] = {lat: 38.2542376, lng:-85.759407};
citiesUrl[259] = 'https://www.numbeo.com/cost-of-living/in/Louisville';
citiesColor[259] = 11;
citiesValues[259] = 73.23;


citiesNames[260] = 'Manchester';
citiesLatLng[260] = {lat: 53.4791466, lng:-2.2447445};
citiesUrl[260] = 'https://www.numbeo.com/cost-of-living/in/Manchester';
citiesColor[260] = 8;
citiesValues[260] = 67.77;


citiesNames[261] = 'Madison, WI';
citiesLatLng[261] = {lat: 43.0730517, lng:-89.4012302};
citiesUrl[261] = 'https://www.numbeo.com/cost-of-living/in/Madison';
citiesColor[261] = 9;
citiesValues[261] = 68.05;


citiesNames[262] = 'Milton Keynes';
citiesLatLng[262] = {lat: 52.0414376, lng:-0.7605567};
citiesUrl[262] = 'https://www.numbeo.com/cost-of-living/in/Milton-Keynes';
citiesColor[262] = 11;
citiesValues[262] = 72.39;


citiesNames[263] = 'Valletta';
citiesLatLng[263] = {lat: 35.89779, lng:14.514106};
citiesUrl[263] = 'https://www.numbeo.com/cost-of-living/in/Valletta';
citiesColor[263] = 8;
citiesValues[263] = 66.04;


citiesNames[264] = 'Newcastle Upon Tyne';
citiesLatLng[264] = {lat: 54.978252, lng:-1.61778};
citiesUrl[264] = 'https://www.numbeo.com/cost-of-living/in/Newcastle-Upon-Tyne';
citiesColor[264] = 7;
citiesValues[264] = 63.89;


citiesNames[265] = 'Miami, FL';
citiesLatLng[265] = {lat: 25.7742657, lng:-80.1936589};
citiesUrl[265] = 'https://www.numbeo.com/cost-of-living/in/Miami';
citiesColor[265] = 14;
citiesValues[265] = 82.70;


citiesNames[266] = 'Milwaukee, WI';
citiesLatLng[266] = {lat: 43.0389025, lng:-87.9064736};
citiesUrl[266] = 'https://www.numbeo.com/cost-of-living/in/Milwaukee';
citiesColor[266] = 11;
citiesValues[266] = 73.18;


citiesNames[267] = 'Minneapolis, MN';
citiesLatLng[267] = {lat: 44.9799654, lng:-93.2638361};
citiesUrl[267] = 'https://www.numbeo.com/cost-of-living/in/Minneapolis';
citiesColor[267] = 14;
citiesValues[267] = 82.01;


citiesNames[268] = 'Northampton';
citiesLatLng[268] = {lat: 52.2385239, lng:-0.902493};
citiesUrl[268] = 'https://www.numbeo.com/cost-of-living/in/Northampton';
citiesColor[268] = 8;
citiesValues[268] = 65.47;


citiesNames[269] = 'Mobile, AL';
citiesLatLng[269] = {lat: 30.6943566, lng:-88.0430541};
citiesUrl[269] = 'https://www.numbeo.com/cost-of-living/in/Mobile';
citiesColor[269] = 8;
citiesValues[269] = 65.27;


citiesNames[270] = 'Norwich';
citiesLatLng[270] = {lat: 52.6281014, lng:1.2993494};
citiesUrl[270] = 'https://www.numbeo.com/cost-of-living/in/Norwich';
citiesColor[270] = 10;
citiesValues[270] = 70.21;


citiesNames[271] = 'Nottingham';
citiesLatLng[271] = {lat: 52.95478319999999, lng:-1.1581086};
citiesUrl[271] = 'https://www.numbeo.com/cost-of-living/in/Nottingham';
citiesColor[271] = 7;
citiesValues[271] = 64.65;


citiesNames[272] = 'Boulder, CO';
citiesLatLng[272] = {lat: 40.0149856, lng:-105.2705456};
citiesUrl[272] = 'https://www.numbeo.com/cost-of-living/in/Boulder';
citiesColor[272] = 14;
citiesValues[272] = 80.93;


citiesNames[273] = 'New Orleans, LA';
citiesLatLng[273] = {lat: 29.9499323, lng:-90.0701156};
citiesUrl[273] = 'https://www.numbeo.com/cost-of-living/in/New-Orleans';
citiesColor[273] = 12;
citiesValues[273] = 75.89;


citiesNames[274] = 'New York, NY';
citiesLatLng[274] = {lat: 40.7127837, lng:-74.0059413};
citiesUrl[274] = 'https://www.numbeo.com/cost-of-living/in/New-York';
citiesColor[274] = 16;
citiesValues[274] = 100.00;


citiesNames[275] = 'Oxford';
citiesLatLng[275] = {lat: 51.7522764, lng:-1.2558243};
citiesUrl[275] = 'https://www.numbeo.com/cost-of-living/in/Oxford';
citiesColor[275] = 10;
citiesValues[275] = 71.25;


citiesNames[276] = 'Stuttgart';
citiesLatLng[276] = {lat: 48.7771056, lng:9.1807688};
citiesUrl[276] = 'https://www.numbeo.com/cost-of-living/in/Stuttgart';
citiesColor[276] = 9;
citiesValues[276] = 69.35;


citiesNames[277] = 'Lagos';
citiesLatLng[277] = {lat: 6.5243793, lng:3.3792057};
citiesUrl[277] = 'https://www.numbeo.com/cost-of-living/in/Lagos';
citiesColor[277] = 2;
citiesValues[277] = 37.65;


citiesNames[278] = 'Newark, NJ';
citiesLatLng[278] = {lat: 40.735657, lng:-74.1723667};
citiesUrl[278] = 'https://www.numbeo.com/cost-of-living/in/Newark';
citiesColor[278] = 10;
citiesValues[278] = 70.71;


citiesNames[279] = 'Norfolk, VA';
citiesLatLng[279] = {lat: 36.8507689, lng:-76.2858726};
citiesUrl[279] = 'https://www.numbeo.com/cost-of-living/in/Norfolk';
citiesColor[279] = 14;
citiesValues[279] = 82.97;


citiesNames[280] = 'Reading';
citiesLatLng[280] = {lat: 51.4542645, lng:-0.9781303};
citiesUrl[280] = 'https://www.numbeo.com/cost-of-living/in/Reading';
citiesColor[280] = 9;
citiesValues[280] = 69.22;


citiesNames[281] = 'Oakland, CA';
citiesLatLng[281] = {lat: 37.8043637, lng:-122.2711137};
citiesUrl[281] = 'https://www.numbeo.com/cost-of-living/in/Oakland';
citiesColor[281] = 15;
citiesValues[281] = 89.50;


citiesNames[282] = 'Oklahoma City, OK';
citiesLatLng[282] = {lat: 35.4675602, lng:-97.5164276};
citiesUrl[282] = 'https://www.numbeo.com/cost-of-living/in/Oklahoma-City';
citiesColor[282] = 8;
citiesValues[282] = 66.71;


citiesNames[283] = 'Chandigarh';
citiesLatLng[283] = {lat: 30.7204507, lng:76.7669704};
citiesUrl[283] = 'https://www.numbeo.com/cost-of-living/in/Chandigarh';
citiesColor[283] = 0;
citiesValues[283] = 26.23;


citiesNames[284] = 'Orlando, FL';
citiesLatLng[284] = {lat: 28.5383355, lng:-81.3792365};
citiesUrl[284] = 'https://www.numbeo.com/cost-of-living/in/Orlando';
citiesColor[284] = 13;
citiesValues[284] = 79.13;


citiesNames[285] = 'Sheffield';
citiesLatLng[285] = {lat: 53.3830548, lng:-1.4647953};
citiesUrl[285] = 'https://www.numbeo.com/cost-of-living/in/Sheffield';
citiesColor[285] = 7;
citiesValues[285] = 64.20;


citiesNames[286] = 'Athens';
citiesLatLng[286] = {lat: 37.9841493, lng:23.7279843};
citiesUrl[286] = 'https://www.numbeo.com/cost-of-living/in/Athens';
citiesColor[286] = 6;
citiesValues[286] = 58.28;


citiesNames[287] = 'Philadelphia, PA';
citiesLatLng[287] = {lat: 39.952335, lng:-75.163789};
citiesUrl[287] = 'https://www.numbeo.com/cost-of-living/in/Philadelphia';
citiesColor[287] = 15;
citiesValues[287] = 84.58;


citiesNames[288] = 'Phoenix, AZ';
citiesLatLng[288] = {lat: 33.4483771, lng:-112.0740373};
citiesUrl[288] = 'https://www.numbeo.com/cost-of-living/in/Phoenix';
citiesColor[288] = 9;
citiesValues[288] = 69.76;


citiesNames[289] = 'Southampton';
citiesLatLng[289] = {lat: 50.90970040000001, lng:-1.4043509};
citiesUrl[289] = 'https://www.numbeo.com/cost-of-living/in/Southampton';
citiesColor[289] = 9;
citiesValues[289] = 68.38;


citiesNames[290] = 'Pittsburgh, PA';
citiesLatLng[290] = {lat: 40.4406248, lng:-79.9958864};
citiesUrl[290] = 'https://www.numbeo.com/cost-of-living/in/Pittsburgh';
citiesColor[290] = 13;
citiesValues[290] = 79.98;


citiesNames[291] = 'Patras';
citiesLatLng[291] = {lat: 38.2462033, lng:21.7352492};
citiesUrl[291] = 'https://www.numbeo.com/cost-of-living/in/Patras';
citiesColor[291] = 5;
citiesValues[291] = 52.16;


citiesNames[292] = 'Plano, TX';
citiesLatLng[292] = {lat: 33.0198431, lng:-96.6988856};
citiesUrl[292] = 'https://www.numbeo.com/cost-of-living/in/Plano';
citiesColor[292] = 12;
citiesValues[292] = 74.44;


citiesNames[293] = 'Portland, OR';
citiesLatLng[293] = {lat: 45.5230622, lng:-122.6764816};
citiesUrl[293] = 'https://www.numbeo.com/cost-of-living/in/Portland';
citiesColor[293] = 13;
citiesValues[293] = 80.26;


citiesNames[294] = 'Raleigh, NC';
citiesLatLng[294] = {lat: 35.7804015, lng:-78.6390779};
citiesUrl[294] = 'https://www.numbeo.com/cost-of-living/in/Raleigh';
citiesColor[294] = 10;
citiesValues[294] = 71.07;


citiesNames[295] = 'Santa Rosa, CA';
citiesLatLng[295] = {lat: 38.4404674, lng:-122.7144314};
citiesUrl[295] = 'https://www.numbeo.com/cost-of-living/in/Santa-Rosa';
citiesColor[295] = 15;
citiesValues[295] = 83.43;


citiesNames[296] = 'Reno, NV';
citiesLatLng[296] = {lat: 39.5296329, lng:-119.8138027};
citiesUrl[296] = 'https://www.numbeo.com/cost-of-living/in/Reno';
citiesColor[296] = 7;
citiesValues[296] = 62.83;


citiesNames[297] = 'Rochester, NY';
citiesLatLng[297] = {lat: 43.1572851, lng:-77.6152141};
citiesUrl[297] = 'https://www.numbeo.com/cost-of-living/in/Rochester';
citiesColor[297] = 9;
citiesValues[297] = 67.95;


citiesNames[298] = 'Sacramento, CA';
citiesLatLng[298] = {lat: 38.5815719, lng:-121.4943996};
citiesUrl[298] = 'https://www.numbeo.com/cost-of-living/in/Sacramento';
citiesColor[298] = 13;
citiesValues[298] = 78.79;


citiesNames[299] = 'Budapest';
citiesLatLng[299] = {lat: 47.4984056, lng:19.0407578};
citiesUrl[299] = 'https://www.numbeo.com/cost-of-living/in/Budapest';
citiesColor[299] = 4;
citiesValues[299] = 44.67;


citiesNames[300] = 'Saint Louis, MO';
citiesLatLng[300] = {lat: 38.6272733, lng:-90.1978889};
citiesUrl[300] = 'https://www.numbeo.com/cost-of-living/in/Saint-Louis';
citiesColor[300] = 11;
citiesValues[300] = 74.26;


citiesNames[301] = 'Debrecen';
citiesLatLng[301] = {lat: 47.5316049, lng:21.6273123};
citiesUrl[301] = 'https://www.numbeo.com/cost-of-living/in/Debrecen';
citiesColor[301] = 3;
citiesValues[301] = 41.62;


citiesNames[302] = 'Saint Paul, MN';
citiesLatLng[302] = {lat: 44.9541667, lng:-93.1138889};
citiesUrl[302] = 'https://www.numbeo.com/cost-of-living/in/Saint-Paul';
citiesColor[302] = 11;
citiesValues[302] = 73.70;


citiesNames[303] = 'Saint Petersburg, FL';
citiesLatLng[303] = {lat: 27.7708606, lng:-82.6792661};
citiesUrl[303] = 'https://www.numbeo.com/cost-of-living/in/Saint-Petersburg-FL';
citiesColor[303] = 14;
citiesValues[303] = 82.97;


citiesNames[304] = 'Salt Lake City, UT';
citiesLatLng[304] = {lat: 40.7607793, lng:-111.8910474};
citiesUrl[304] = 'https://www.numbeo.com/cost-of-living/in/Salt-Lake-City';
citiesColor[304] = 8;
citiesValues[304] = 67.09;


citiesNames[305] = 'San Antonio, TX';
citiesLatLng[305] = {lat: 29.4241219, lng:-98.4936282};
citiesUrl[305] = 'https://www.numbeo.com/cost-of-living/in/San-Antonio';
citiesColor[305] = 7;
citiesValues[305] = 61.62;


citiesNames[306] = 'Quebec City';
citiesLatLng[306] = {lat: 46.8032826, lng:-71.242796};
citiesUrl[306] = 'https://www.numbeo.com/cost-of-living/in/Quebec-City';
citiesColor[306] = 8;
citiesValues[306] = 66.41;


citiesNames[307] = 'San Diego, CA';
citiesLatLng[307] = {lat: 32.715738, lng:-117.1610838};
citiesUrl[307] = 'https://www.numbeo.com/cost-of-living/in/San-Diego';
citiesColor[307] = 13;
citiesValues[307] = 77.89;


citiesNames[308] = 'San Francisco, CA';
citiesLatLng[308] = {lat: 37.775206, lng:-122.419209};
citiesUrl[308] = 'https://www.numbeo.com/cost-of-living/in/San-Francisco';
citiesColor[308] = 16;
citiesValues[308] = 98.79;


citiesNames[309] = 'San Jose, CA';
citiesLatLng[309] = {lat: 37.3382082, lng:-121.8863286};
citiesUrl[309] = 'https://www.numbeo.com/cost-of-living/in/San-Jose';
citiesColor[309] = 13;
citiesValues[309] = 80.33;


citiesNames[310] = 'York';
citiesLatLng[310] = {lat: 53.9577018, lng:-1.0822855};
citiesUrl[310] = 'https://www.numbeo.com/cost-of-living/in/York';
citiesColor[310] = 10;
citiesValues[310] = 70.22;


citiesNames[311] = 'Seattle, WA';
citiesLatLng[311] = {lat: 47.6038321, lng:-122.3300624};
citiesUrl[311] = 'https://www.numbeo.com/cost-of-living/in/Seattle';
citiesColor[311] = 15;
citiesValues[311] = 88.27;


citiesNames[312] = 'Shreveport, LA';
citiesLatLng[312] = {lat: 32.5251516, lng:-93.7501789};
citiesUrl[312] = 'https://www.numbeo.com/cost-of-living/in/Shreveport';
citiesColor[312] = 8;
citiesValues[312] = 67.75;


citiesNames[313] = 'Spokane, WA';
citiesLatLng[313] = {lat: 47.6587802, lng:-117.4260466};
citiesUrl[313] = 'https://www.numbeo.com/cost-of-living/in/Spokane';
citiesColor[313] = 10;
citiesValues[313] = 72.05;


citiesNames[314] = 'Tacoma, WA';
citiesLatLng[314] = {lat: 47.2528768, lng:-122.4442906};
citiesUrl[314] = 'https://www.numbeo.com/cost-of-living/in/Tacoma';
citiesColor[314] = 12;
citiesValues[314] = 76.81;


citiesNames[315] = 'Malmo';
citiesLatLng[315] = {lat: 55.6033306, lng:13.0013029};
citiesUrl[315] = 'https://www.numbeo.com/cost-of-living/in/Malmo';
citiesColor[315] = 9;
citiesValues[315] = 68.99;


citiesNames[316] = 'Tampa, FL';
citiesLatLng[316] = {lat: 27.9475216, lng:-82.4584279};
citiesUrl[316] = 'https://www.numbeo.com/cost-of-living/in/Tampa';
citiesColor[316] = 11;
citiesValues[316] = 73.53;


citiesNames[317] = 'Hartford, CT';
citiesLatLng[317] = {lat: 41.7637111, lng:-72.6850932};
citiesUrl[317] = 'https://www.numbeo.com/cost-of-living/in/Hartford';
citiesColor[317] = 13;
citiesValues[317] = 78.22;


citiesNames[318] = 'Tucson, AZ';
citiesLatLng[318] = {lat: 32.2217429, lng:-110.926479};
citiesUrl[318] = 'https://www.numbeo.com/cost-of-living/in/Tucson';
citiesColor[318] = 7;
citiesValues[318] = 63.18;


citiesNames[319] = 'Tulsa, OK';
citiesLatLng[319] = {lat: 36.1539816, lng:-95.992775};
citiesUrl[319] = 'https://www.numbeo.com/cost-of-living/in/Tulsa';
citiesColor[319] = 9;
citiesValues[319] = 69.96;


citiesNames[320] = 'Virginia Beach, VA';
citiesLatLng[320] = {lat: 36.8529263, lng:-75.977985};
citiesUrl[320] = 'https://www.numbeo.com/cost-of-living/in/Virginia-Beach';
citiesColor[320] = 10;
citiesValues[320] = 70.35;


citiesNames[321] = 'Washington, DC';
citiesLatLng[321] = {lat: 38.9071923, lng:-77.0368707};
citiesUrl[321] = 'https://www.numbeo.com/cost-of-living/in/Washington';
citiesColor[321] = 16;
citiesValues[321] = 92.62;


citiesNames[322] = 'Wichita, KS';
citiesLatLng[322] = {lat: 37.68717609999999, lng:-97.33005299999999};
citiesUrl[322] = 'https://www.numbeo.com/cost-of-living/in/Wichita';
citiesColor[322] = 11;
citiesValues[322] = 73.85;


citiesNames[323] = 'Columbia, SC';
citiesLatLng[323] = {lat: 34.0007104, lng:-81.0348144};
citiesUrl[323] = 'https://www.numbeo.com/cost-of-living/in/Columbia';
citiesColor[323] = 9;
citiesValues[323] = 69.82;


citiesNames[324] = 'Montevideo';
citiesLatLng[324] = {lat: -34.9011127, lng:-56.16453139999999};
citiesUrl[324] = 'https://www.numbeo.com/cost-of-living/in/Montevideo';
citiesColor[324] = 8;
citiesValues[324] = 67.65;


citiesNames[325] = 'Kota Kinabalu';
citiesLatLng[325] = {lat: 5.9780066, lng:116.0728988};
citiesUrl[325] = 'https://www.numbeo.com/cost-of-living/in/Kota-Kinabalu';
citiesColor[325] = 4;
citiesValues[325] = 47.41;


citiesNames[326] = 'Kigali';
citiesLatLng[326] = {lat: -1.950106, lng:30.058769};
citiesUrl[326] = 'https://www.numbeo.com/cost-of-living/in/Kigali';
citiesColor[326] = 3;
citiesValues[326] = 40.01;


citiesNames[327] = 'Brighton';
citiesLatLng[327] = {lat: 50.819522, lng:-0.13642};
citiesUrl[327] = 'https://www.numbeo.com/cost-of-living/in/Brighton';
citiesColor[327] = 12;
citiesValues[327] = 76.30;


citiesNames[328] = 'Reykjavik';
citiesLatLng[328] = {lat: 64.12652059999999, lng:-21.8174393};
citiesUrl[328] = 'https://www.numbeo.com/cost-of-living/in/Reykjavik';
citiesColor[328] = 16;
citiesValues[328] = 112.96;


citiesNames[329] = 'Caracas';
citiesLatLng[329] = {lat: 10.5062366, lng:-66.9145543};
citiesUrl[329] = 'https://www.numbeo.com/cost-of-living/in/Caracas';
citiesColor[329] = 2;
citiesValues[329] = 37.99;


citiesNames[330] = 'Cancun';
citiesLatLng[330] = {lat: 21.1708906, lng:-86.8403165};
citiesUrl[330] = 'https://www.numbeo.com/cost-of-living/in/Cancun';
citiesColor[330] = 2;
citiesValues[330] = 37.42;


citiesNames[331] = 'Asheville, NC';
citiesLatLng[331] = {lat: 35.6009452, lng:-82.554015};
citiesUrl[331] = 'https://www.numbeo.com/cost-of-living/in/Asheville';
citiesColor[331] = 14;
citiesValues[331] = 80.79;


citiesNames[332] = 'Cebu';
citiesLatLng[332] = {lat: 10.3156992, lng:123.8854366};
citiesUrl[332] = 'https://www.numbeo.com/cost-of-living/in/Cebu';
citiesColor[332] = 3;
citiesValues[332] = 40.30;


citiesNames[333] = 'Bath';
citiesLatLng[333] = {lat: 51.3814282, lng:-2.3574537};
citiesUrl[333] = 'https://www.numbeo.com/cost-of-living/in/Bath';
citiesColor[333] = 15;
citiesValues[333] = 84.79;


citiesNames[334] = 'Cork';
citiesLatLng[334] = {lat: 51.8968917, lng:-8.4863157};
citiesUrl[334] = 'https://www.numbeo.com/cost-of-living/in/Cork';
citiesColor[334] = 12;
citiesValues[334] = 75.77;


citiesNames[335] = 'Davao';
citiesLatLng[335] = {lat: 7.190708, lng:125.455341};
citiesUrl[335] = 'https://www.numbeo.com/cost-of-living/in/Davao';
citiesColor[335] = 1;
citiesValues[335] = 31.55;


citiesNames[336] = 'Dublin';
citiesLatLng[336] = {lat: 53.3494299, lng:-6.2600969};
citiesUrl[336] = 'https://www.numbeo.com/cost-of-living/in/Dublin';
citiesColor[336] = 14;
citiesValues[336] = 80.95;


citiesNames[337] = 'Heidelberg';
citiesLatLng[337] = {lat: 49.3987524, lng:8.6724335};
citiesUrl[337] = 'https://www.numbeo.com/cost-of-living/in/Heidelberg';
citiesColor[337] = 11;
citiesValues[337] = 72.21;


citiesNames[338] = 'Galway';
citiesLatLng[338] = {lat: 53.270668, lng:-9.0567905};
citiesUrl[338] = 'https://www.numbeo.com/cost-of-living/in/Galway';
citiesColor[338] = 10;
citiesValues[338] = 71.95;


citiesNames[339] = 'Penang';
citiesLatLng[339] = {lat: 5.414921, lng:100.3297612};
citiesUrl[339] = 'https://www.numbeo.com/cost-of-living/in/Penang';
citiesColor[339] = 4;
citiesValues[339] = 45.00;


citiesNames[340] = 'Santo Domingo';
citiesLatLng[340] = {lat: 18.4860575, lng:-69.93121169999999};
citiesUrl[340] = 'https://www.numbeo.com/cost-of-living/in/Santo-Domingo';
citiesColor[340] = 6;
citiesValues[340] = 53.10;


citiesNames[341] = 'Limerick';
citiesLatLng[341] = {lat: 52.6680204, lng:-8.630497499999999};
citiesUrl[341] = 'https://www.numbeo.com/cost-of-living/in/Limerick';
citiesColor[341] = 15;
citiesValues[341] = 88.06;


citiesNames[342] = 'Adelaide';
citiesLatLng[342] = {lat: -34.9286212, lng:138.5999594};
citiesUrl[342] = 'https://www.numbeo.com/cost-of-living/in/Adelaide';
citiesColor[342] = 14;
citiesValues[342] = 81.52;


citiesNames[343] = 'Makati';
citiesLatLng[343] = {lat: 14.55453885, lng:121.021449600577};
citiesUrl[343] = 'https://www.numbeo.com/cost-of-living/in/Makati';
citiesColor[343] = 4;
citiesValues[343] = 47.06;


citiesNames[344] = 'Cyberjaya, Selangor';
citiesLatLng[344] = {lat: 2.8757309, lng:101.6741608};
citiesUrl[344] = 'https://www.numbeo.com/cost-of-living/in/Cyberjaya';
citiesColor[344] = 3;
citiesValues[344] = 40.80;


citiesNames[345] = 'Yerevan';
citiesLatLng[345] = {lat: 40.1791857, lng:44.4991029};
citiesUrl[345] = 'https://www.numbeo.com/cost-of-living/in/Yerevan';
citiesColor[345] = 2;
citiesValues[345] = 34.39;


citiesNames[346] = 'Fairfax, VA';
citiesLatLng[346] = {lat: 38.8462236, lng:-77.3063733};
citiesUrl[346] = 'https://www.numbeo.com/cost-of-living/in/Fairfax';
citiesColor[346] = 14;
citiesValues[346] = 83.20;


citiesNames[347] = 'Manila';
citiesLatLng[347] = {lat: 14.5995124, lng:120.9842195};
citiesUrl[347] = 'https://www.numbeo.com/cost-of-living/in/Manila';
citiesColor[347] = 3;
citiesValues[347] = 40.37;


citiesNames[348] = 'Brisbane';
citiesLatLng[348] = {lat: -27.4689682, lng:153.0234991};
citiesUrl[348] = 'https://www.numbeo.com/cost-of-living/in/Brisbane';
citiesColor[348] = 14;
citiesValues[348] = 81.56;


citiesNames[349] = 'Alessandria';
citiesLatLng[349] = {lat: 44.9131176, lng:8.616157};
citiesUrl[349] = 'https://www.numbeo.com/cost-of-living/in/Alessandria';
citiesColor[349] = 16;
citiesValues[349] = 92.89;


citiesNames[350] = 'Cuenca';
citiesLatLng[350] = {lat: -2.9001285, lng:-79.00589649999999};
citiesUrl[350] = 'https://www.numbeo.com/cost-of-living/in/Cuenca';
citiesColor[350] = 4;
citiesValues[350] = 46.17;


citiesNames[351] = 'Cairns';
citiesLatLng[351] = {lat: -16.923978, lng:145.77086};
citiesUrl[351] = 'https://www.numbeo.com/cost-of-living/in/Cairns';
citiesColor[351] = 15;
citiesValues[351] = 83.65;


citiesNames[352] = 'Canberra';
citiesLatLng[352] = {lat: -35.28204, lng:149.12858};
citiesUrl[352] = 'https://www.numbeo.com/cost-of-living/in/Canberra';
citiesColor[352] = 12;
citiesValues[352] = 77.79;


citiesNames[353] = 'Darwin';
citiesLatLng[353] = {lat: -12.461334, lng:130.841904};
citiesUrl[353] = 'https://www.numbeo.com/cost-of-living/in/Darwin';
citiesColor[353] = 13;
citiesValues[353] = 80.30;


citiesNames[354] = 'Manama';
citiesLatLng[354] = {lat: 26.2285161, lng:50.5860497};
citiesUrl[354] = 'https://www.numbeo.com/cost-of-living/in/Manama';
citiesColor[354] = 6;
citiesValues[354] = 54.90;


citiesNames[355] = 'Gold Coast';
citiesLatLng[355] = {lat: -28.0172605, lng:153.4256987};
citiesUrl[355] = 'https://www.numbeo.com/cost-of-living/in/Gold-Coast';
citiesColor[355] = 12;
citiesValues[355] = 75.71;


citiesNames[356] = 'Guayaquil';
citiesLatLng[356] = {lat: -2.1709979, lng:-79.9223592};
citiesUrl[356] = 'https://www.numbeo.com/cost-of-living/in/Guayaquil';
citiesColor[356] = 5;
citiesValues[356] = 50.31;


citiesNames[357] = 'Hobart';
citiesLatLng[357] = {lat: -42.8819032, lng:147.3238148};
citiesUrl[357] = 'https://www.numbeo.com/cost-of-living/in/Hobart';
citiesColor[357] = 14;
citiesValues[357] = 80.98;


citiesNames[358] = 'Quezon City';
citiesLatLng[358] = {lat: 14.6760413, lng:121.0437003};
citiesUrl[358] = 'https://www.numbeo.com/cost-of-living/in/Quezon-City';
citiesColor[358] = 2;
citiesValues[358] = 34.80;


citiesNames[359] = 'Melbourne';
citiesLatLng[359] = {lat: -37.814251, lng:144.963169};
citiesUrl[359] = 'https://www.numbeo.com/cost-of-living/in/Melbourne';
citiesColor[359] = 14;
citiesValues[359] = 80.89;


citiesNames[360] = 'Perth';
citiesLatLng[360] = {lat: -31.9554, lng:115.85859};
citiesUrl[360] = 'https://www.numbeo.com/cost-of-living/in/Perth';
citiesColor[360] = 15;
citiesValues[360] = 87.01;


citiesNames[361] = 'Bari';
citiesLatLng[361] = {lat: 41.1256631, lng:16.8619381};
citiesUrl[361] = 'https://www.numbeo.com/cost-of-living/in/Bari';
citiesColor[361] = 8;
citiesValues[361] = 66.49;


citiesNames[362] = 'Bergamo';
citiesLatLng[362] = {lat: 45.6949028, lng:9.6699528};
citiesUrl[362] = 'https://www.numbeo.com/cost-of-living/in/Bergamo';
citiesColor[362] = 13;
citiesValues[362] = 78.33;


citiesNames[363] = 'Sydney';
citiesLatLng[363] = {lat: -33.8674869, lng:151.2069902};
citiesUrl[363] = 'https://www.numbeo.com/cost-of-living/in/Sydney';
citiesColor[363] = 15;
citiesValues[363] = 88.08;


citiesNames[364] = 'Bologna';
citiesLatLng[364] = {lat: 44.4942191, lng:11.3464815};
citiesUrl[364] = 'https://www.numbeo.com/cost-of-living/in/Bologna';
citiesColor[364] = 10;
citiesValues[364] = 71.57;


citiesNames[365] = 'Brescia';
citiesLatLng[365] = {lat: 45.5398382, lng:10.2229562};
citiesUrl[365] = 'https://www.numbeo.com/cost-of-living/in/Brescia';
citiesColor[365] = 7;
citiesValues[365] = 62.91;


citiesNames[366] = 'Alexandria';
citiesLatLng[366] = {lat: 31.2000924, lng:29.9187387};
citiesUrl[366] = 'https://www.numbeo.com/cost-of-living/in/Alexandria';
citiesColor[366] = 0;
citiesValues[366] = 17.77;


citiesNames[367] = 'Cagliari';
citiesLatLng[367] = {lat: 39.2238411, lng:9.1216613};
citiesUrl[367] = 'https://www.numbeo.com/cost-of-living/in/Cagliari';
citiesColor[367] = 13;
citiesValues[367] = 78.67;


citiesNames[368] = 'Quito';
citiesLatLng[368] = {lat: -0.1806532, lng:-78.4678382};
citiesUrl[368] = 'https://www.numbeo.com/cost-of-living/in/Quito';
citiesColor[368] = 5;
citiesValues[368] = 47.45;


citiesNames[369] = 'Catania';
citiesLatLng[369] = {lat: 37.5024825, lng:15.0878345};
citiesUrl[369] = 'https://www.numbeo.com/cost-of-living/in/Catania';
citiesColor[369] = 7;
citiesValues[369] = 63.01;


citiesNames[370] = 'Wollongong';
citiesLatLng[370] = {lat: -34.4243941, lng:150.89385};
citiesUrl[370] = 'https://www.numbeo.com/cost-of-living/in/Wollongong';
citiesColor[370] = 12;
citiesValues[370] = 75.73;


citiesNames[371] = 'Ferrara';
citiesLatLng[371] = {lat: 44.8378378, lng:11.6203994};
citiesUrl[371] = 'https://www.numbeo.com/cost-of-living/in/Ferrara';
citiesColor[371] = 16;
citiesValues[371] = 122.41;


citiesNames[372] = 'Florence';
citiesLatLng[372] = {lat: 43.7687324, lng:11.2569013};
citiesUrl[372] = 'https://www.numbeo.com/cost-of-living/in/Florence';
citiesColor[372] = 16;
citiesValues[372] = 96.87;


citiesNames[373] = 'Genoa';
citiesLatLng[373] = {lat: 44.4070624, lng:8.9339889};
citiesUrl[373] = 'https://www.numbeo.com/cost-of-living/in/Genoa';
citiesColor[373] = 13;
citiesValues[373] = 78.65;


citiesNames[374] = 'Paphos';
citiesLatLng[374] = {lat: 34.7749117, lng:32.4284616876626};
citiesUrl[374] = 'https://www.numbeo.com/cost-of-living/in/Paphos';
citiesColor[374] = 7;
citiesValues[374] = 62.67;


citiesNames[375] = 'Milan';
citiesLatLng[375] = {lat: 45.4654219, lng:9.1859243};
citiesUrl[375] = 'https://www.numbeo.com/cost-of-living/in/Milan';
citiesColor[375] = 13;
citiesValues[375] = 79.63;


citiesNames[376] = 'Cairo';
citiesLatLng[376] = {lat: 30.0444196, lng:31.2357116};
citiesUrl[376] = 'https://www.numbeo.com/cost-of-living/in/Cairo-Egypt';
citiesColor[376] = 0;
citiesValues[376] = 19.58;


citiesNames[377] = 'Modena';
citiesLatLng[377] = {lat: 44.647115, lng:10.9251857};
citiesUrl[377] = 'https://www.numbeo.com/cost-of-living/in/Modena';
citiesColor[377] = 16;
citiesValues[377] = 92.83;


citiesNames[378] = 'Florianopolis';
citiesLatLng[378] = {lat: -27.5969039, lng:-48.5494544};
citiesUrl[378] = 'https://www.numbeo.com/cost-of-living/in/Florianopolis';
citiesColor[378] = 5;
citiesValues[378] = 49.35;


citiesNames[379] = 'Naples';
citiesLatLng[379] = {lat: 40.8517746, lng:14.2681244};
citiesUrl[379] = 'https://www.numbeo.com/cost-of-living/in/Naples';
citiesColor[379] = 8;
citiesValues[379] = 67.11;


citiesNames[380] = 'Baku';
citiesLatLng[380] = {lat: 40.40926169999999, lng:49.8670924};
citiesUrl[380] = 'https://www.numbeo.com/cost-of-living/in/Baku';
citiesColor[380] = 1;
citiesValues[380] = 29.11;


citiesNames[381] = 'Padova';
citiesLatLng[381] = {lat: 45.4064349, lng:11.8767611};
citiesUrl[381] = 'https://www.numbeo.com/cost-of-living/in/Padova';
citiesColor[381] = 13;
citiesValues[381] = 79.61;


citiesNames[382] = 'Portland, ME';
citiesLatLng[382] = {lat: 43.661471, lng:-70.2553259};
citiesUrl[382] = 'https://www.numbeo.com/cost-of-living/in/Portland-ME';
citiesColor[382] = 13;
citiesValues[382] = 79.47;


citiesNames[383] = 'Palermo';
citiesLatLng[383] = {lat: 38.1156193, lng:13.3613758};
citiesUrl[383] = 'https://www.numbeo.com/cost-of-living/in/Palermo';
citiesColor[383] = 9;
citiesValues[383] = 68.72;


citiesNames[384] = 'Parma';
citiesLatLng[384] = {lat: 44.8013504, lng:10.3280355};
citiesUrl[384] = 'https://www.numbeo.com/cost-of-living/in/Parma';
citiesColor[384] = 8;
citiesValues[384] = 67.94;


citiesNames[385] = 'Perugia';
citiesLatLng[385] = {lat: 43.1107009, lng:12.389172};
citiesUrl[385] = 'https://www.numbeo.com/cost-of-living/in/Perugia';
citiesColor[385] = 16;
citiesValues[385] = 120.29;


citiesNames[386] = 'Albany, NY';
citiesLatLng[386] = {lat: 42.6525793, lng:-73.7562317};
citiesUrl[386] = 'https://www.numbeo.com/cost-of-living/in/Albany';
citiesColor[386] = 15;
citiesValues[386] = 83.49;


citiesNames[387] = 'Reggio Nell\'emilia';
citiesLatLng[387] = {lat: 44.6962299, lng:10.6277943};
citiesUrl[387] = 'https://www.numbeo.com/cost-of-living/in/Reggio-Nell%27emilia';
citiesColor[387] = 16;
citiesValues[387] = 121.38;


citiesNames[388] = 'Mangalore';
citiesLatLng[388] = {lat: 12.9141417, lng:74.8559568};
citiesUrl[388] = 'https://www.numbeo.com/cost-of-living/in/Mangalore';
citiesColor[388] = 0;
citiesValues[388] = 22.58;


citiesNames[389] = 'Rome';
citiesLatLng[389] = {lat: 41.9027835, lng:12.4963655};
citiesUrl[389] = 'https://www.numbeo.com/cost-of-living/in/Rome';
citiesColor[389] = 11;
citiesValues[389] = 73.93;


citiesNames[390] = 'Dayton, OH';
citiesLatLng[390] = {lat: 39.7589478, lng:-84.1916069};
citiesUrl[390] = 'https://www.numbeo.com/cost-of-living/in/Dayton';
citiesColor[390] = 10;
citiesValues[390] = 70.82;


citiesNames[391] = 'Newcastle';
citiesLatLng[391] = {lat: -32.926696, lng:151.7788922};
citiesUrl[391] = 'https://www.numbeo.com/cost-of-living/in/Newcastle';
citiesColor[391] = 12;
citiesValues[391] = 77.61;


citiesNames[392] = 'Trento';
citiesLatLng[392] = {lat: 46.0664228, lng:11.1257601};
citiesUrl[392] = 'https://www.numbeo.com/cost-of-living/in/Trento';
citiesColor[392] = 9;
citiesValues[392] = 68.36;


citiesNames[393] = 'Trieste';
citiesLatLng[393] = {lat: 45.6300555, lng:13.7879014};
citiesUrl[393] = 'https://www.numbeo.com/cost-of-living/in/Trieste';
citiesColor[393] = 15;
citiesValues[393] = 89.80;


citiesNames[394] = 'Nasik';
citiesLatLng[394] = {lat: 20.216667, lng:74.083333};
citiesUrl[394] = 'https://www.numbeo.com/cost-of-living/in/Nasik';
citiesColor[394] = 0;
citiesValues[394] = 24.42;


citiesNames[395] = 'Turin';
citiesLatLng[395] = {lat: 45.0705621, lng:7.6866186};
citiesUrl[395] = 'https://www.numbeo.com/cost-of-living/in/Turin';
citiesColor[395] = 9;
citiesValues[395] = 69.48;


citiesNames[396] = 'Venice';
citiesLatLng[396] = {lat: 45.4408474, lng:12.3155151};
citiesUrl[396] = 'https://www.numbeo.com/cost-of-living/in/Venice';
citiesColor[396] = 16;
citiesValues[396] = 120.48;


citiesNames[397] = 'Verona';
citiesLatLng[397] = {lat: 45.4383278, lng:10.9917623};
citiesUrl[397] = 'https://www.numbeo.com/cost-of-living/in/Verona';
citiesColor[397] = 14;
citiesValues[397] = 83.03;


citiesNames[398] = 'Vicenza';
citiesLatLng[398] = {lat: 45.5491217, lng:11.5496686};
citiesUrl[398] = 'https://www.numbeo.com/cost-of-living/in/Vicenza';
citiesColor[398] = 16;
citiesValues[398] = 105.20;


citiesNames[399] = 'Syracuse, NY';
citiesLatLng[399] = {lat: 43.0481221, lng:-76.1474244};
citiesUrl[399] = 'https://www.numbeo.com/cost-of-living/in/Syracuse';
citiesColor[399] = 11;
citiesValues[399] = 73.53;


citiesNames[400] = 'Greenville, SC';
citiesLatLng[400] = {lat: 34.8526176, lng:-82.3940104};
citiesUrl[400] = 'https://www.numbeo.com/cost-of-living/in/Greenville';
citiesColor[400] = 10;
citiesValues[400] = 71.43;


citiesNames[401] = 'Beersheba';
citiesLatLng[401] = {lat: 31.252972, lng:34.791464};
citiesUrl[401] = 'https://www.numbeo.com/cost-of-living/in/Beersheba';
citiesColor[401] = 14;
citiesValues[401] = 80.65;


citiesNames[402] = 'Gainesville, FL';
citiesLatLng[402] = {lat: 29.651907, lng:-82.3247976};
citiesUrl[402] = 'https://www.numbeo.com/cost-of-living/in/Gainesville';
citiesColor[402] = 9;
citiesValues[402] = 68.88;


citiesNames[403] = 'Fort Myers, FL';
citiesLatLng[403] = {lat: 26.640628, lng:-81.8723084};
citiesUrl[403] = 'https://www.numbeo.com/cost-of-living/in/Fort-Myers';
citiesColor[403] = 9;
citiesValues[403] = 69.44;


citiesNames[404] = 'Santa Cruz, CA';
citiesLatLng[404] = {lat: 36.9741171, lng:-122.0307963};
citiesUrl[404] = 'https://www.numbeo.com/cost-of-living/in/Santa-Cruz';
citiesColor[404] = 15;
citiesValues[404] = 89.48;


citiesNames[405] = 'Singapore';
citiesLatLng[405] = {lat: 1.2800945, lng:103.8509491};
citiesUrl[405] = 'https://www.numbeo.com/cost-of-living/in/Singapore';
citiesColor[405] = 14;
citiesValues[405] = 83.06;


citiesNames[406] = 'Berkeley, CA';
citiesLatLng[406] = {lat: 37.8708789, lng:-122.2728247};
citiesUrl[406] = 'https://www.numbeo.com/cost-of-living/in/Berkeley';
citiesColor[406] = 15;
citiesValues[406] = 90.23;


citiesNames[407] = 'Springfield, MO';
citiesLatLng[407] = {lat: 37.2089572, lng:-93.2922989};
citiesUrl[407] = 'https://www.numbeo.com/cost-of-living/in/Springfield';
citiesColor[407] = 6;
citiesValues[407] = 59.44;


citiesNames[408] = 'Busan';
citiesLatLng[408] = {lat: 35.1795543, lng:129.0756416};
citiesUrl[408] = 'https://www.numbeo.com/cost-of-living/in/Busan';
citiesColor[408] = 13;
citiesValues[408] = 80.24;


citiesNames[409] = 'San Salvador';
citiesLatLng[409] = {lat: 13.6929403, lng:-89.2181911};
citiesUrl[409] = 'https://www.numbeo.com/cost-of-living/in/San-Salvador';
citiesColor[409] = 4;
citiesValues[409] = 46.95;


citiesNames[410] = 'Dhaka';
citiesLatLng[410] = {lat: 23.810332, lng:90.4125181};
citiesUrl[410] = 'https://www.numbeo.com/cost-of-living/in/Dhaka';
citiesColor[410] = 2;
citiesValues[410] = 36.63;


citiesNames[411] = 'Riga';
citiesLatLng[411] = {lat: 56.9465346, lng:24.1048525};
citiesUrl[411] = 'https://www.numbeo.com/cost-of-living/in/Riga';
citiesColor[411] = 5;
citiesValues[411] = 49.79;


citiesNames[412] = 'Tehran';
citiesLatLng[412] = {lat: 35.6891975, lng:51.3889736};
citiesUrl[412] = 'https://www.numbeo.com/cost-of-living/in/Tehran';
citiesColor[412] = 3;
citiesValues[412] = 40.78;


citiesNames[413] = 'Nis';
citiesLatLng[413] = {lat: 43.31938, lng:21.896328};
citiesUrl[413] = 'https://www.numbeo.com/cost-of-living/in/Nis';
citiesColor[413] = 1;
citiesValues[413] = 30.43;


citiesNames[414] = 'Liverpool';
citiesLatLng[414] = {lat: 53.4083714, lng:-2.9915726};
citiesUrl[414] = 'https://www.numbeo.com/cost-of-living/in/Liverpool';
citiesColor[414] = 9;
citiesValues[414] = 68.54;


citiesNames[415] = 'Vancouver, WA';
citiesLatLng[415] = {lat: 45.6387281, lng:-122.6614861};
citiesUrl[415] = 'https://www.numbeo.com/cost-of-living/in/Vancouver-WA';
citiesColor[415] = 10;
citiesValues[415] = 71.86;


citiesNames[416] = 'Seoul';
citiesLatLng[416] = {lat: 37.566535, lng:126.9779692};
citiesUrl[416] = 'https://www.numbeo.com/cost-of-living/in/Seoul';
citiesColor[416] = 15;
citiesValues[416] = 83.75;


citiesNames[417] = 'Al Khobar';
citiesLatLng[417] = {lat: 26.3039999, lng:50.1960237};
citiesUrl[417] = 'https://www.numbeo.com/cost-of-living/in/Al-Khobar';
citiesColor[417] = 4;
citiesValues[417] = 47.37;


citiesNames[418] = 'Plymouth';
citiesLatLng[418] = {lat: 50.3754565, lng:-4.1426565};
citiesUrl[418] = 'https://www.numbeo.com/cost-of-living/in/Plymouth';
citiesColor[418] = 7;
citiesValues[418] = 63.26;


citiesNames[419] = 'Phnom Penh';
citiesLatLng[419] = {lat: 11.5448729, lng:104.8921668};
citiesUrl[419] = 'https://www.numbeo.com/cost-of-living/in/Phnom-Penh';
citiesColor[419] = 5;
citiesValues[419] = 49.17;


citiesNames[420] = 'Bali';
citiesLatLng[420] = {lat: -8.4095178, lng:115.188916};
citiesUrl[420] = 'https://www.numbeo.com/cost-of-living/in/Bali';
citiesColor[420] = 4;
citiesValues[420] = 42.86;


citiesNames[421] = 'Colombo';
citiesLatLng[421] = {lat: 6.9270786, lng:79.861243};
citiesUrl[421] = 'https://www.numbeo.com/cost-of-living/in/Colombo';
citiesColor[421] = 2;
citiesValues[421] = 36.34;


citiesNames[422] = 'Red Deer';
citiesLatLng[422] = {lat: 52.266741, lng:-113.802295};
citiesUrl[422] = 'https://www.numbeo.com/cost-of-living/in/Red-Deer';
citiesColor[422] = 11;
citiesValues[422] = 74.41;


citiesNames[423] = 'Kaunas';
citiesLatLng[423] = {lat: 54.8981112, lng:23.9113098};
citiesUrl[423] = 'https://www.numbeo.com/cost-of-living/in/Kaunas';
citiesColor[423] = 4;
citiesValues[423] = 46.03;


citiesNames[424] = 'Addis Ababa';
citiesLatLng[424] = {lat: 9.0, lng:38.75};
citiesUrl[424] = 'https://www.numbeo.com/cost-of-living/in/Addis-Ababa';
citiesColor[424] = 4;
citiesValues[424] = 46.34;


citiesNames[425] = 'Huntsville, AL';
citiesLatLng[425] = {lat: 34.7303688, lng:-86.5861037};
citiesUrl[425] = 'https://www.numbeo.com/cost-of-living/in/Huntsville';
citiesColor[425] = 8;
citiesValues[425] = 65.50;


citiesNames[426] = 'Beijing';
citiesLatLng[426] = {lat: 39.904211, lng:116.407395};
citiesUrl[426] = 'https://www.numbeo.com/cost-of-living/in/Beijing';
citiesColor[426] = 5;
citiesValues[426] = 50.46;


citiesNames[427] = 'Cape Town';
citiesLatLng[427] = {lat: -33.9248685, lng:18.4240553};
citiesUrl[427] = 'https://www.numbeo.com/cost-of-living/in/Cape-Town';
citiesColor[427] = 4;
citiesValues[427] = 43.19;


citiesNames[428] = 'Durban';
citiesLatLng[428] = {lat: -29.85868039999999, lng:31.0218404};
citiesUrl[428] = 'https://www.numbeo.com/cost-of-living/in/Durban';
citiesColor[428] = 3;
citiesValues[428] = 40.12;


citiesNames[429] = 'Irbil';
citiesLatLng[429] = {lat: 36.2062933, lng:44.0088697};
citiesUrl[429] = 'https://www.numbeo.com/cost-of-living/in/Irbil';
citiesColor[429] = 6;
citiesValues[429] = 56.54;


citiesNames[430] = 'Vilnius';
citiesLatLng[430] = {lat: 54.6871555, lng:25.2796514};
citiesUrl[430] = 'https://www.numbeo.com/cost-of-living/in/Vilnius';
citiesColor[430] = 5;
citiesValues[430] = 47.74;


citiesNames[431] = 'Johannesburg';
citiesLatLng[431] = {lat: -26.205, lng:28.0497222};
citiesUrl[431] = 'https://www.numbeo.com/cost-of-living/in/Johannesburg';
citiesColor[431] = 4;
citiesValues[431] = 45.28;


citiesNames[432] = 'Chengdu';
citiesLatLng[432] = {lat: 30.6765553, lng:104.0612783};
citiesUrl[432] = 'https://www.numbeo.com/cost-of-living/in/Chengdu';
citiesColor[432] = 2;
citiesValues[432] = 36.48;


citiesNames[433] = 'Port Elizabeth';
citiesLatLng[433] = {lat: -33.9434595, lng:25.5327401};
citiesUrl[433] = 'https://www.numbeo.com/cost-of-living/in/Port-Elizabeth';
citiesColor[433] = 4;
citiesValues[433] = 42.83;


citiesNames[434] = 'Guangzhou';
citiesLatLng[434] = {lat: 23.12911, lng:113.264385};
citiesUrl[434] = 'https://www.numbeo.com/cost-of-living/in/Guangzhou';
citiesColor[434] = 4;
citiesValues[434] = 45.08;


citiesNames[435] = 'Luxembourg';
citiesLatLng[435] = {lat: 49.6100036, lng:6.129596};
citiesUrl[435] = 'https://www.numbeo.com/cost-of-living/in/Luxembourg';
citiesColor[435] = 14;
citiesValues[435] = 81.46;


citiesNames[436] = 'Haifa';
citiesLatLng[436] = {lat: 32.7940463, lng:34.989571};
citiesUrl[436] = 'https://www.numbeo.com/cost-of-living/in/Haifa';
citiesColor[436] = 11;
citiesValues[436] = 73.80;


citiesNames[437] = 'Ann Arbor, MI';
citiesLatLng[437] = {lat: 42.2708716, lng:-83.7263294};
citiesUrl[437] = 'https://www.numbeo.com/cost-of-living/in/Ann-Arbor';
citiesColor[437] = 9;
citiesValues[437] = 68.39;


citiesNames[438] = 'Ramat Gan';
citiesLatLng[438] = {lat: 32.068423, lng:34.824787};
citiesUrl[438] = 'https://www.numbeo.com/cost-of-living/in/Ramat-Gan';
citiesColor[438] = 13;
citiesValues[438] = 80.11;


citiesNames[439] = 'Kaohsiung';
citiesLatLng[439] = {lat: 22.6272784, lng:120.3014353};
citiesUrl[439] = 'https://www.numbeo.com/cost-of-living/in/Kaohsiung';
citiesColor[439] = 6;
citiesValues[439] = 53.51;


citiesNames[440] = 'Tel Aviv-yafo';
citiesLatLng[440] = {lat: 32.0852999, lng:34.78176759999999};
citiesUrl[440] = 'https://www.numbeo.com/cost-of-living/in/Tel-Aviv-yafo';
citiesColor[440] = 13;
citiesValues[440] = 80.54;


citiesNames[441] = 'Taipei';
citiesLatLng[441] = {lat: 25.0329694, lng:121.5654177};
citiesUrl[441] = 'https://www.numbeo.com/cost-of-living/in/Taipei';
citiesColor[441] = 8;
citiesValues[441] = 65.95;


citiesNames[442] = 'Guildford';
citiesLatLng[442] = {lat: 50.1904668, lng:-5.4021949};
citiesUrl[442] = 'https://www.numbeo.com/cost-of-living/in/Guildford';
citiesColor[442] = 9;
citiesValues[442] = 68.58;


citiesNames[443] = 'Brooklyn, NY';
citiesLatLng[443] = {lat: 40.6501038, lng:-73.9495823};
citiesUrl[443] = 'https://www.numbeo.com/cost-of-living/in/Brooklyn';
citiesColor[443] = 15;
citiesValues[443] = 90.01;


citiesNames[444] = 'Shanghai';
citiesLatLng[444] = {lat: 31.230416, lng:121.473701};
citiesUrl[444] = 'https://www.numbeo.com/cost-of-living/in/Shanghai';
citiesColor[444] = 6;
citiesValues[444] = 54.50;


citiesNames[445] = 'Bangkok';
citiesLatLng[445] = {lat: 13.7563309, lng:100.5017651};
citiesUrl[445] = 'https://www.numbeo.com/cost-of-living/in/Bangkok';
citiesColor[445] = 5;
citiesValues[445] = 50.74;


citiesNames[446] = 'Skopje';
citiesLatLng[446] = {lat: 41.9962268, lng:21.4317955};
citiesUrl[446] = 'https://www.numbeo.com/cost-of-living/in/Skopje';
citiesColor[446] = 2;
citiesValues[446] = 35.42;


citiesNames[447] = 'Chiang Mai';
citiesLatLng[447] = {lat: 18.787747, lng:98.99312839999999};
citiesUrl[447] = 'https://www.numbeo.com/cost-of-living/in/Chiang-Mai';
citiesColor[447] = 3;
citiesValues[447] = 41.84;


citiesNames[448] = 'Melbourne, FL';
citiesLatLng[448] = {lat: 28.0836269, lng:-80.6081089};
citiesUrl[448] = 'https://www.numbeo.com/cost-of-living/in/Melbourne-FL';
citiesColor[448] = 15;
citiesValues[448] = 89.13;


citiesNames[449] = 'Shenzhen';
citiesLatLng[449] = {lat: 22.543447, lng:114.057818};
citiesUrl[449] = 'https://www.numbeo.com/cost-of-living/in/Shenzhen';
citiesColor[449] = 6;
citiesValues[449] = 54.43;


citiesNames[450] = 'Accra';
citiesLatLng[450] = {lat: 5.6037168, lng:-0.1869644};
citiesUrl[450] = 'https://www.numbeo.com/cost-of-living/in/Accra';
citiesColor[450] = 8;
citiesValues[450] = 65.17;


citiesNames[451] = 'Pensacola, FL';
citiesLatLng[451] = {lat: 30.421309, lng:-87.2169149};
citiesUrl[451] = 'https://www.numbeo.com/cost-of-living/in/Pensacola';
citiesColor[451] = 10;
citiesValues[451] = 70.23;


citiesNames[452] = 'Amman';
citiesLatLng[452] = {lat: 31.9565783, lng:35.9456951};
citiesUrl[452] = 'https://www.numbeo.com/cost-of-living/in/Amman';
citiesColor[452] = 6;
citiesValues[452] = 59.73;


citiesNames[453] = 'Phuket';
citiesLatLng[453] = {lat: 7.9519331, lng:98.33808839999999};
citiesUrl[453] = 'https://www.numbeo.com/cost-of-living/in/Phuket';
citiesColor[453] = 5;
citiesValues[453] = 48.65;


citiesNames[454] = 'Portsmouth';
citiesLatLng[454] = {lat: 50.7989137, lng:-1.0911627};
citiesUrl[454] = 'https://www.numbeo.com/cost-of-living/in/Portsmouth';
citiesColor[454] = 10;
citiesValues[454] = 70.42;


citiesNames[455] = 'Tiruchirapalli (Trichy)';
citiesLatLng[455] = {lat: 10.765833, lng:78.714722};
citiesUrl[455] = 'https://www.numbeo.com/cost-of-living/in/Tiruchirapalli-Trichy';
citiesColor[455] = 0;
citiesValues[455] = 21.22;


citiesNames[456] = 'Dar Es Salaam';
citiesLatLng[456] = {lat: -6.792354, lng:39.2083284};
citiesUrl[456] = 'https://www.numbeo.com/cost-of-living/in/Dar-Es-Salaam';
citiesColor[456] = 6;
citiesValues[456] = 57.72;


citiesNames[457] = 'Valenzuela';
citiesLatLng[457] = {lat: 14.7010556, lng:120.9830225};
citiesUrl[457] = 'https://www.numbeo.com/cost-of-living/in/Valenzuela';
citiesColor[457] = 1;
citiesValues[457] = 30.51;


citiesNames[458] = 'Kazan';
citiesLatLng[458] = {lat: 55.8304307, lng:49.06608060000001};
citiesUrl[458] = 'https://www.numbeo.com/cost-of-living/in/Kazan';
citiesColor[458] = 1;
citiesValues[458] = 31.74;


citiesNames[459] = 'Santa Barbara, CA';
citiesLatLng[459] = {lat: 34.4208305, lng:-119.6981901};
citiesUrl[459] = 'https://www.numbeo.com/cost-of-living/in/Santa-Barbara';
citiesColor[459] = 13;
citiesValues[459] = 79.06;


citiesNames[460] = 'Queretaro';
citiesLatLng[460] = {lat: 20.5878372, lng:-100.3879904};
citiesUrl[460] = 'https://www.numbeo.com/cost-of-living/in/Queretaro';
citiesColor[460] = 2;
citiesValues[460] = 36.24;


citiesNames[461] = 'Everett, WA';
citiesLatLng[461] = {lat: 47.9673056, lng:-122.2013998};
citiesUrl[461] = 'https://www.numbeo.com/cost-of-living/in/Everett';
citiesColor[461] = 14;
citiesValues[461] = 81.60;


citiesNames[462] = 'Guatemala City';
citiesLatLng[462] = {lat: 14.6349149, lng:-90.5068824};
citiesUrl[462] = 'https://www.numbeo.com/cost-of-living/in/Guatemala-City';
citiesColor[462] = 4;
citiesValues[462] = 43.69;


citiesNames[463] = 'Sliema';
citiesLatLng[463] = {lat: 35.9122222, lng:14.5041667};
citiesUrl[463] = 'https://www.numbeo.com/cost-of-living/in/Sliema';
citiesColor[463] = 8;
citiesValues[463] = 67.83;


citiesNames[464] = 'Bhubaneswar';
citiesLatLng[464] = {lat: 20.2960587, lng:85.8245398};
citiesUrl[464] = 'https://www.numbeo.com/cost-of-living/in/Bhubaneswar';
citiesColor[464] = 0;
citiesValues[464] = 22.73;


citiesNames[465] = 'Chisinau';
citiesLatLng[465] = {lat: 47.0104529, lng:28.8638103};
citiesUrl[465] = 'https://www.numbeo.com/cost-of-living/in/Chisinau';
citiesColor[465] = 1;
citiesValues[465] = 28.64;


citiesNames[466] = 'Allentown, PA';
citiesLatLng[466] = {lat: 40.6084305, lng:-75.4901833};
citiesUrl[466] = 'https://www.numbeo.com/cost-of-living/in/Allentown';
citiesColor[466] = 15;
citiesValues[466] = 84.65;


citiesNames[467] = 'Hanoi';
citiesLatLng[467] = {lat: 21.0277644, lng:105.8341598};
citiesUrl[467] = 'https://www.numbeo.com/cost-of-living/in/Hanoi';
citiesColor[467] = 3;
citiesValues[467] = 41.76;


citiesNames[468] = 'Ho Chi Minh City';
citiesLatLng[468] = {lat: 10.8230989, lng:106.6296638};
citiesUrl[468] = 'https://www.numbeo.com/cost-of-living/in/Ho-Chi-Minh-City';
citiesColor[468] = 4;
citiesValues[468] = 42.63;


citiesNames[469] = 'Kuwait City';
citiesLatLng[469] = {lat: 29.3797091, lng:47.9735629};
citiesUrl[469] = 'https://www.numbeo.com/cost-of-living/in/Kuwait-City';
citiesColor[469] = 15;
citiesValues[469] = 89.55;


citiesNames[470] = 'New Haven, CT';
citiesLatLng[470] = {lat: 41.3081527, lng:-72.9281577};
citiesUrl[470] = 'https://www.numbeo.com/cost-of-living/in/New-Haven';
citiesColor[470] = 16;
citiesValues[470] = 92.03;


citiesNames[471] = 'Tunis';
citiesLatLng[471] = {lat: 36.8064948, lng:10.1815316};
citiesUrl[471] = 'https://www.numbeo.com/cost-of-living/in/Tunis';
citiesColor[471] = 1;
citiesValues[471] = 31.23;


citiesNames[472] = 'Queens, NY';
citiesLatLng[472] = {lat: 40.7498243, lng:-73.7976337};
citiesUrl[472] = 'https://www.numbeo.com/cost-of-living/in/Queens';
citiesColor[472] = 14;
citiesValues[472] = 80.97;


citiesNames[473] = 'Amsterdam';
citiesLatLng[473] = {lat: 52.3702157, lng:4.895167900000001};
citiesUrl[473] = 'https://www.numbeo.com/cost-of-living/in/Amsterdam';
citiesColor[473] = 13;
citiesValues[473] = 79.94;


citiesNames[474] = 'Eindhoven';
citiesLatLng[474] = {lat: 51.44164199999999, lng:5.4697225};
citiesUrl[474] = 'https://www.numbeo.com/cost-of-living/in/Eindhoven';
citiesColor[474] = 10;
citiesValues[474] = 70.71;


citiesNames[475] = 'Groningen';
citiesLatLng[475] = {lat: 53.2193835, lng:6.5665018};
citiesUrl[475] = 'https://www.numbeo.com/cost-of-living/in/Groningen';
citiesColor[475] = 10;
citiesValues[475] = 70.17;


citiesNames[476] = 'Leiden';
citiesLatLng[476] = {lat: 52.1601144, lng:4.4970097};
citiesUrl[476] = 'https://www.numbeo.com/cost-of-living/in/Leiden';
citiesColor[476] = 10;
citiesValues[476] = 70.50;


citiesNames[477] = 'Rotterdam';
citiesLatLng[477] = {lat: 51.9244201, lng:4.4777325};
citiesUrl[477] = 'https://www.numbeo.com/cost-of-living/in/Rotterdam';
citiesColor[477] = 11;
citiesValues[477] = 72.89;


citiesNames[478] = 'Utrecht';
citiesLatLng[478] = {lat: 52.09073739999999, lng:5.1214201};
citiesUrl[478] = 'https://www.numbeo.com/cost-of-living/in/Utrecht';
citiesColor[478] = 11;
citiesValues[478] = 74.27;


citiesNames[479] = 'Beirut';
citiesLatLng[479] = {lat: 33.8886289, lng:35.4954794};
citiesUrl[479] = 'https://www.numbeo.com/cost-of-living/in/Beirut';
citiesColor[479] = 7;
citiesValues[479] = 64.04;


citiesNames[480] = 'Bergen';
citiesLatLng[480] = {lat: 60.39126279999999, lng:5.3220544};
citiesUrl[480] = 'https://www.numbeo.com/cost-of-living/in/Bergen';
citiesColor[480] = 16;
citiesValues[480] = 104.80;


citiesNames[481] = 'Kampala';
citiesLatLng[481] = {lat: 0.3136111, lng:32.5811111};
citiesUrl[481] = 'https://www.numbeo.com/cost-of-living/in/Kampala';
citiesColor[481] = 2;
citiesValues[481] = 36.96;


citiesNames[482] = 'Lexington, KY';
citiesLatLng[482] = {lat: 38.0317136, lng:-84.4951359};
citiesUrl[482] = 'https://www.numbeo.com/cost-of-living/in/Lexington';
citiesColor[482] = 12;
citiesValues[482] = 75.66;


citiesNames[483] = 'Oslo';
citiesLatLng[483] = {lat: 59.9138688, lng:10.7522454};
citiesUrl[483] = 'https://www.numbeo.com/cost-of-living/in/Oslo';
citiesColor[483] = 16;
citiesValues[483] = 108.24;


citiesNames[484] = 'Trondheim';
citiesLatLng[484] = {lat: 63.4305149, lng:10.3950528};
citiesUrl[484] = 'https://www.numbeo.com/cost-of-living/in/Trondheim';
citiesColor[484] = 16;
citiesValues[484] = 111.96;


citiesNames[485] = 'Bydgoszcz';
citiesLatLng[485] = {lat: 53.12348040000001, lng:18.0084378};
citiesUrl[485] = 'https://www.numbeo.com/cost-of-living/in/Bydgoszcz';
citiesColor[485] = 3;
citiesValues[485] = 39.55;


citiesNames[486] = 'Tallahassee, FL';
citiesLatLng[486] = {lat: 30.4382559, lng:-84.2807329};
citiesUrl[486] = 'https://www.numbeo.com/cost-of-living/in/Tallahassee';
citiesColor[486] = 11;
citiesValues[486] = 72.90;


citiesNames[487] = 'Krakow (Cracow)';
citiesLatLng[487] = {lat: 50.06465009999999, lng:19.9449799};
citiesUrl[487] = 'https://www.numbeo.com/cost-of-living/in/Krakow-Cracow';
citiesColor[487] = 3;
citiesValues[487] = 38.59;


citiesNames[488] = 'Fort Lauderdale, FL';
citiesLatLng[488] = {lat: 26.1224386, lng:-80.13731740000001};
citiesUrl[488] = 'https://www.numbeo.com/cost-of-living/in/Fort-Lauderdale';
citiesColor[488] = 12;
citiesValues[488] = 76.87;


citiesNames[489] = 'Gdansk';
citiesLatLng[489] = {lat: 54.35202520000001, lng:18.6466384};
citiesUrl[489] = 'https://www.numbeo.com/cost-of-living/in/Gdansk';
citiesColor[489] = 3;
citiesValues[489] = 39.83;


citiesNames[490] = 'Nashville, TN';
citiesLatLng[490] = {lat: 36.1626638, lng:-86.7816016};
citiesUrl[490] = 'https://www.numbeo.com/cost-of-living/in/Nashville';
citiesColor[490] = 11;
citiesValues[490] = 72.87;


citiesNames[491] = 'Gdynia';
citiesLatLng[491] = {lat: 54.5188898, lng:18.5305409};
citiesUrl[491] = 'https://www.numbeo.com/cost-of-living/in/Gdynia';
citiesColor[491] = 3;
citiesValues[491] = 39.39;


citiesNames[492] = 'Nairobi';
citiesLatLng[492] = {lat: -1.2833333, lng:36.8166667};
citiesUrl[492] = 'https://www.numbeo.com/cost-of-living/in/Nairobi';
citiesColor[492] = 4;
citiesValues[492] = 42.82;


citiesNames[493] = 'Katowice';
citiesLatLng[493] = {lat: 50.26489189999999, lng:19.0237815};
citiesUrl[493] = 'https://www.numbeo.com/cost-of-living/in/Katowice';
citiesColor[493] = 2;
citiesValues[493] = 36.13;


citiesNames[494] = 'Tbilisi';
citiesLatLng[494] = {lat: 41.7151377, lng:44.827096};
citiesUrl[494] = 'https://www.numbeo.com/cost-of-living/in/Tbilisi';
citiesColor[494] = 1;
citiesValues[494] = 30.66;


citiesNames[495] = 'Lublin';
citiesLatLng[495] = {lat: 51.2464536, lng:22.5684463};
citiesUrl[495] = 'https://www.numbeo.com/cost-of-living/in/Lublin';
citiesColor[495] = 2;
citiesValues[495] = 36.08;


citiesNames[496] = 'Muscat';
citiesLatLng[496] = {lat: 23.58589, lng:58.4059227};
citiesUrl[496] = 'https://www.numbeo.com/cost-of-living/in/Muscat';
citiesColor[496] = 6;
citiesValues[496] = 53.96;


citiesNames[497] = 'Suzhou';
citiesLatLng[497] = {lat: 31.2984758, lng:120.622239};
citiesUrl[497] = 'https://www.numbeo.com/cost-of-living/in/Suzhou';
citiesColor[497] = 3;
citiesValues[497] = 40.00;


citiesNames[498] = 'Poznan';
citiesLatLng[498] = {lat: 52.406374, lng:16.9251681};
citiesUrl[498] = 'https://www.numbeo.com/cost-of-living/in/Poznan';
citiesColor[498] = 3;
citiesValues[498] = 38.83;


citiesNames[499] = 'Szczecin';
citiesLatLng[499] = {lat: 53.4285438, lng:14.5528116};
citiesUrl[499] = 'https://www.numbeo.com/cost-of-living/in/Szczecin';
citiesColor[499] = 3;
citiesValues[499] = 38.81;


citiesNames[500] = 'Warsaw';
citiesLatLng[500] = {lat: 52.2296756, lng:21.0122287};
citiesUrl[500] = 'https://www.numbeo.com/cost-of-living/in/Warsaw';
citiesColor[500] = 3;
citiesValues[500] = 41.41;


citiesNames[501] = 'Wroclaw';
citiesLatLng[501] = {lat: 51.1078852, lng:17.0385376};
citiesUrl[501] = 'https://www.numbeo.com/cost-of-living/in/Wroclaw';
citiesColor[501] = 3;
citiesValues[501] = 39.43;


citiesNames[502] = 'Dusseldorf';
citiesLatLng[502] = {lat: 51.2277411, lng:6.7734556};
citiesUrl[502] = 'https://www.numbeo.com/cost-of-living/in/Dusseldorf';
citiesColor[502] = 15;
citiesValues[502] = 89.86;


citiesNames[503] = 'West Palm Beach, FL';
citiesLatLng[503] = {lat: 26.7153424, lng:-80.0533746};
citiesUrl[503] = 'https://www.numbeo.com/cost-of-living/in/West-Palm-Beach';
citiesColor[503] = 14;
citiesValues[503] = 82.56;


citiesNames[504] = 'Braga';
citiesLatLng[504] = {lat: 41.5454486, lng:-8.426506999999999};
citiesUrl[504] = 'https://www.numbeo.com/cost-of-living/in/Braga';
citiesColor[504] = 4;
citiesValues[504] = 46.79;


citiesNames[505] = 'Islamabad';
citiesLatLng[505] = {lat: 33.7293882, lng:73.0931461};
citiesUrl[505] = 'https://www.numbeo.com/cost-of-living/in/Islamabad';
citiesColor[505] = 1;
citiesValues[505] = 33.03;


citiesNames[506] = 'Noida';
citiesLatLng[506] = {lat: 28.5355161, lng:77.3910265};
citiesUrl[506] = 'https://www.numbeo.com/cost-of-living/in/Noida';
citiesColor[506] = 1;
citiesValues[506] = 28.24;


citiesNames[507] = 'Coimbra';
citiesLatLng[507] = {lat: 40.2033145, lng:-8.4102573};
citiesUrl[507] = 'https://www.numbeo.com/cost-of-living/in/Coimbra';
citiesColor[507] = 5;
citiesValues[507] = 48.23;


citiesNames[508] = 'Karachi';
citiesLatLng[508] = {lat: 24.8741557, lng:67.031789};
citiesUrl[508] = 'https://www.numbeo.com/cost-of-living/in/Karachi';
citiesColor[508] = 1;
citiesValues[508] = 28.31;


citiesNames[509] = 'Hong Kong';
citiesLatLng[509] = {lat: 22.396428, lng:114.109497};
citiesUrl[509] = 'https://www.numbeo.com/cost-of-living/in/Hong-Kong';
citiesColor[509] = 13;
citiesValues[509] = 78.84;


citiesNames[510] = 'Lahore';
citiesLatLng[510] = {lat: 31.5621916, lng:74.3228517};
citiesUrl[510] = 'https://www.numbeo.com/cost-of-living/in/Lahore';
citiesColor[510] = 1;
citiesValues[510] = 31.97;


citiesNames[511] = 'Lisbon';
citiesLatLng[511] = {lat: 38.7222524, lng:-9.1393366};
citiesUrl[511] = 'https://www.numbeo.com/cost-of-living/in/Lisbon';
citiesColor[511] = 5;
citiesValues[511] = 51.30;


citiesNames[512] = 'Porto';
citiesLatLng[512] = {lat: 41.1579438, lng:-8.629105299999999};
citiesUrl[512] = 'https://www.numbeo.com/cost-of-living/in/Porto';
citiesColor[512] = 5;
citiesValues[512] = 49.48;


citiesNames[513] = 'Tirana';
citiesLatLng[513] = {lat: 41.33, lng:19.82};
citiesUrl[513] = 'https://www.numbeo.com/cost-of-living/in/Tirana';
citiesColor[513] = 2;
citiesValues[513] = 34.46;


citiesNames[514] = 'Goa';
citiesLatLng[514] = {lat: 15.2993265, lng:74.12399599999999};
citiesUrl[514] = 'https://www.numbeo.com/cost-of-living/in/Goa';
citiesColor[514] = 0;
citiesValues[514] = 25.82;


citiesNames[515] = 'Arad';
citiesLatLng[515] = {lat: 46.1753793, lng:21.3196342};
citiesUrl[515] = 'https://www.numbeo.com/cost-of-living/in/Arad';
citiesColor[515] = 1;
citiesValues[515] = 33.80;


citiesNames[516] = 'Brasov';
citiesLatLng[516] = {lat: 45.6579755, lng:25.6011977};
citiesUrl[516] = 'https://www.numbeo.com/cost-of-living/in/Brasov';
citiesColor[516] = 2;
citiesValues[516] = 34.78;


citiesNames[517] = 'Bucharest';
citiesLatLng[517] = {lat: 44.4267674, lng:26.1025384};
citiesUrl[517] = 'https://www.numbeo.com/cost-of-living/in/Bucharest';
citiesColor[517] = 3;
citiesValues[517] = 39.33;


citiesNames[518] = 'Ahmedabad';
citiesLatLng[518] = {lat: 23.022505, lng:72.5713621};
citiesUrl[518] = 'https://www.numbeo.com/cost-of-living/in/Ahmedabad';
citiesColor[518] = 0;
citiesValues[518] = 25.28;


citiesNames[519] = 'Cluj-napoca';
citiesLatLng[519] = {lat: 46.7712101, lng:23.6236353};
citiesUrl[519] = 'https://www.numbeo.com/cost-of-living/in/Cluj-napoca';
citiesColor[519] = 2;
citiesValues[519] = 37.26;


citiesNames[520] = 'Craiova';
citiesLatLng[520] = {lat: 44.3301785, lng:23.7948808};
citiesUrl[520] = 'https://www.numbeo.com/cost-of-living/in/Craiova';
citiesColor[520] = 1;
citiesValues[520] = 31.80;


citiesNames[521] = 'Graz';
citiesLatLng[521] = {lat: 47.070714, lng:15.439504};
citiesUrl[521] = 'https://www.numbeo.com/cost-of-living/in/Graz';
citiesColor[521] = 7;
citiesValues[521] = 63.44;


citiesNames[522] = 'Lusaka';
citiesLatLng[522] = {lat: -15.408193, lng:28.287167};
citiesUrl[522] = 'https://www.numbeo.com/cost-of-living/in/Lusaka';
citiesColor[522] = 5;
citiesValues[522] = 52.64;


citiesNames[523] = 'Bangalore';
citiesLatLng[523] = {lat: 12.9715987, lng:77.5945627};
citiesUrl[523] = 'https://www.numbeo.com/cost-of-living/in/Bangalore';
citiesColor[523] = 0;
citiesValues[523] = 27.16;


citiesNames[524] = 'Innsbruck';
citiesLatLng[524] = {lat: 47.2692124, lng:11.4041024};
citiesUrl[524] = 'https://www.numbeo.com/cost-of-living/in/Innsbruck';
citiesColor[524] = 12;
citiesValues[524] = 74.62;


citiesNames[525] = 'Bhopal';
citiesLatLng[525] = {lat: 23.5, lng:77.416667};
citiesUrl[525] = 'https://www.numbeo.com/cost-of-living/in/Bhopal';
citiesColor[525] = 0;
citiesValues[525] = 26.00;


citiesNames[526] = 'Athens, GA';
citiesLatLng[526] = {lat: 33.955802, lng:-83.3823656};
citiesUrl[526] = 'https://www.numbeo.com/cost-of-living/in/Athens-GA';
citiesColor[526] = 6;
citiesValues[526] = 60.71;


citiesNames[527] = 'Iasi';
citiesLatLng[527] = {lat: 47.1584549, lng:27.6014418};
citiesUrl[527] = 'https://www.numbeo.com/cost-of-living/in/Iasi';
citiesColor[527] = 2;
citiesValues[527] = 34.41;


citiesNames[528] = 'Chennai';
citiesLatLng[528] = {lat: 13.0826802, lng:80.2707184};
citiesUrl[528] = 'https://www.numbeo.com/cost-of-living/in/Chennai';
citiesColor[528] = 0;
citiesValues[528] = 26.47;


citiesNames[529] = 'Coimbatore';
citiesLatLng[529] = {lat: 11.0168445, lng:76.9558321};
citiesUrl[529] = 'https://www.numbeo.com/cost-of-living/in/Coimbatore';
citiesColor[529] = 0;
citiesValues[529] = 23.78;


citiesNames[530] = 'Oradea';
citiesLatLng[530] = {lat: 47.0569272, lng:21.9326054};
citiesUrl[530] = 'https://www.numbeo.com/cost-of-living/in/Oradea';
citiesColor[530] = 2;
citiesValues[530] = 34.70;


citiesNames[531] = 'Doha';
citiesLatLng[531] = {lat: 25.2856329, lng:51.5264162};
citiesUrl[531] = 'https://www.numbeo.com/cost-of-living/in/Doha';
citiesColor[531] = 8;
citiesValues[531] = 67.73;


citiesNames[532] = 'Delhi';
citiesLatLng[532] = {lat: 28.6139391, lng:77.2090212};
citiesUrl[532] = 'https://www.numbeo.com/cost-of-living/in/Delhi';
citiesColor[532] = 1;
citiesValues[532] = 29.36;


citiesNames[533] = 'Linz';
citiesLatLng[533] = {lat: 48.30694, lng:14.28583};
citiesUrl[533] = 'https://www.numbeo.com/cost-of-living/in/Linz';
citiesColor[533] = 14;
citiesValues[533] = 81.03;


citiesNames[534] = 'Gurgaon';
citiesLatLng[534] = {lat: 28.4594965, lng:77.0266383};
citiesUrl[534] = 'https://www.numbeo.com/cost-of-living/in/Gurgaon';
citiesColor[534] = 1;
citiesValues[534] = 31.52;


citiesNames[535] = 'Sibiu';
citiesLatLng[535] = {lat: 45.7973912, lng:24.1519202};
citiesUrl[535] = 'https://www.numbeo.com/cost-of-living/in/Sibiu';
citiesColor[535] = 2;
citiesValues[535] = 35.38;


citiesNames[536] = 'Guwahati';
citiesLatLng[536] = {lat: 26.147129, lng:91.7355511};
citiesUrl[536] = 'https://www.numbeo.com/cost-of-living/in/Guwahati';
citiesColor[536] = 0;
citiesValues[536] = 24.31;


citiesNames[537] = 'Ad Dammam';
citiesLatLng[537] = {lat: 26.3926665, lng:49.9777136};
citiesUrl[537] = 'https://www.numbeo.com/cost-of-living/in/Ad-Dammam';
citiesColor[537] = 9;
citiesValues[537] = 69.18;


citiesNames[538] = 'Vienna';
citiesLatLng[538] = {lat: 48.2092062, lng:16.3727778};
citiesUrl[538] = 'https://www.numbeo.com/cost-of-living/in/Vienna';
citiesColor[538] = 9;
citiesValues[538] = 68.15;


citiesNames[539] = 'Hyderabad';
citiesLatLng[539] = {lat: 17.385044, lng:78.486671};
citiesUrl[539] = 'https://www.numbeo.com/cost-of-living/in/Hyderabad';
citiesColor[539] = 0;
citiesValues[539] = 24.20;


citiesNames[540] = 'Indore';
citiesLatLng[540] = {lat: 22.7195687, lng:75.8577258};
citiesUrl[540] = 'https://www.numbeo.com/cost-of-living/in/Indore';
citiesColor[540] = 0;
citiesValues[540] = 24.65;


citiesNames[541] = 'Jaipur';
citiesLatLng[541] = {lat: 26.917, lng:75.817};
citiesUrl[541] = 'https://www.numbeo.com/cost-of-living/in/Jaipur';
citiesColor[541] = 0;
citiesValues[541] = 25.32;


citiesNames[542] = 'Kingston';
citiesLatLng[542] = {lat: 18.0423274, lng:-76.8028933};
citiesUrl[542] = 'https://www.numbeo.com/cost-of-living/in/Kingston-Jamaica';
citiesColor[542] = 7;
citiesValues[542] = 63.00;


citiesNames[543] = 'Tripoli';
citiesLatLng[543] = {lat: 32.8955292, lng:13.1787929};
citiesUrl[543] = 'https://www.numbeo.com/cost-of-living/in/Tripoli';
citiesColor[543] = 5;
citiesValues[543] = 49.14;


citiesNames[544] = 'Timisoara';
citiesLatLng[544] = {lat: 45.7488716, lng:21.2086793};
citiesUrl[544] = 'https://www.numbeo.com/cost-of-living/in/Timisoara';
citiesColor[544] = 2;
citiesValues[544] = 35.77;


citiesNames[545] = 'Kolkata';
citiesLatLng[545] = {lat: 22.572646, lng:88.36389500000001};
citiesUrl[545] = 'https://www.numbeo.com/cost-of-living/in/Kolkata';
citiesColor[545] = 0;
citiesValues[545] = 26.73;


citiesNames[546] = 'Jeddah (Jiddah)';
citiesLatLng[546] = {lat: 21.632977, lng:39.157262};
citiesUrl[546] = 'https://www.numbeo.com/cost-of-living/in/Jeddah-Jiddah';
citiesColor[546] = 5;
citiesValues[546] = 49.09;


citiesNames[547] = 'Lucknow (Lakhnau)';
citiesLatLng[547] = {lat: 26.8466937, lng:80.94616599999999};
citiesUrl[547] = 'https://www.numbeo.com/cost-of-living/in/Lucknow-Lakhnau';
citiesColor[547] = 0;
citiesValues[547] = 25.98;


citiesNames[548] = 'Ludhiana';
citiesLatLng[548] = {lat: 30.900965, lng:75.8572758};
citiesUrl[548] = 'https://www.numbeo.com/cost-of-living/in/Ludhiana';
citiesColor[548] = 1;
citiesValues[548] = 28.69;


citiesNames[549] = 'Madurai';
citiesLatLng[549] = {lat: 9.9252007, lng:78.1197754};
citiesUrl[549] = 'https://www.numbeo.com/cost-of-living/in/Madurai';
citiesColor[549] = 0;
citiesValues[549] = 21.04;


citiesNames[550] = 'Mumbai';
citiesLatLng[550] = {lat: 19.0759837, lng:72.8776559};
citiesUrl[550] = 'https://www.numbeo.com/cost-of-living/in/Mumbai';
citiesColor[550] = 1;
citiesValues[550] = 29.94;


citiesNames[551] = 'Riyadh';
citiesLatLng[551] = {lat: 24.7494029, lng:46.9028375};
citiesUrl[551] = 'https://www.numbeo.com/cost-of-living/in/Riyadh';
citiesColor[551] = 5;
citiesValues[551] = 47.84;


citiesNames[552] = 'Mysore';
citiesLatLng[552] = {lat: 12.3051828, lng:76.6553609};
citiesUrl[552] = 'https://www.numbeo.com/cost-of-living/in/Mysore';
citiesColor[552] = 0;
citiesValues[552] = 26.01;


citiesNames[553] = 'Nagpur';
citiesLatLng[553] = {lat: 21.1444307, lng:79.0798136};
citiesUrl[553] = 'https://www.numbeo.com/cost-of-living/in/Nagpur';
citiesColor[553] = 0;
citiesValues[553] = 24.51;


citiesNames[554] = 'Pune';
citiesLatLng[554] = {lat: 18.5204303, lng:73.8567437};
citiesUrl[554] = 'https://www.numbeo.com/cost-of-living/in/Pune';
citiesColor[554] = 0;
citiesValues[554] = 26.93;


citiesNames[555] = 'Harare';
citiesLatLng[555] = {lat: -17.8251657, lng:31.03351};
citiesUrl[555] = 'https://www.numbeo.com/cost-of-living/in/Harare';
citiesColor[555] = 5;
citiesValues[555] = 51.88;


citiesNames[556] = 'Minsk';
citiesLatLng[556] = {lat: 53.902253, lng:27.561863};
citiesUrl[556] = 'https://www.numbeo.com/cost-of-living/in/Minsk';
citiesColor[556] = 1;
citiesValues[556] = 33.81;


citiesNames[557] = 'Surat';
citiesLatLng[557] = {lat: 21.1702401, lng:72.83106070000001};
citiesUrl[557] = 'https://www.numbeo.com/cost-of-living/in/Surat';
citiesColor[557] = 0;
citiesValues[557] = 25.91;


citiesNames[558] = 'Thane';
citiesLatLng[558] = {lat: 19.1943294, lng:72.9701779};
citiesUrl[558] = 'https://www.numbeo.com/cost-of-living/in/Thane';
citiesColor[558] = 1;
citiesValues[558] = 28.59;


citiesNames[559] = 'Vadodara';
citiesLatLng[559] = {lat: 22.3071588, lng:73.1812187};
citiesUrl[559] = 'https://www.numbeo.com/cost-of-living/in/Vadodara';
citiesColor[559] = 0;
citiesValues[559] = 26.56;


citiesNames[560] = 'Charlottesville, VA';
citiesLatLng[560] = {lat: 38.0293059, lng:-78.4766781};
citiesUrl[560] = 'https://www.numbeo.com/cost-of-living/in/Charlottesville';
citiesColor[560] = 11;
citiesValues[560] = 73.05;


citiesNames[561] = 'St. John\'s, NL';
citiesLatLng[561] = {lat: 47.5614849, lng:-52.7125839};
citiesUrl[561] = 'https://www.numbeo.com/cost-of-living/in/St-John%27s';
citiesColor[561] = 13;
citiesValues[561] = 80.25;


citiesNames[562] = 'Visakhapatnam';
citiesLatLng[562] = {lat: 17.6868159, lng:83.2184815};
citiesUrl[562] = 'https://www.numbeo.com/cost-of-living/in/Visakhapatnam';
citiesColor[562] = 0;
citiesValues[562] = 23.67;


citiesNames[563] = 'Moscow';
citiesLatLng[563] = {lat: 55.755826, lng:37.6173};
citiesUrl[563] = 'https://www.numbeo.com/cost-of-living/in/Moscow';
citiesColor[563] = 4;
citiesValues[563] = 42.35;


citiesNames[564] = 'Bandung';
citiesLatLng[564] = {lat: -6.9344694, lng:107.6049539};
citiesUrl[564] = 'https://www.numbeo.com/cost-of-living/in/Bandung';
citiesColor[564] = 2;
citiesValues[564] = 36.72;


citiesNames[565] = 'Damascus';
citiesLatLng[565] = {lat: 33.5130695, lng:36.3095814};
citiesUrl[565] = 'https://www.numbeo.com/cost-of-living/in/Damascus';
citiesColor[565] = 1;
citiesValues[565] = 29.12;


citiesNames[566] = 'Jakarta';
citiesLatLng[566] = {lat: -6.2087634, lng:106.845599};
citiesUrl[566] = 'https://www.numbeo.com/cost-of-living/in/Jakarta';
citiesColor[566] = 5;
citiesValues[566] = 48.39;


citiesNames[567] = 'Antwerp';
citiesLatLng[567] = {lat: 51.2194475, lng:4.4024643};
citiesUrl[567] = 'https://www.numbeo.com/cost-of-living/in/Antwerp';
citiesColor[567] = 13;
citiesValues[567] = 79.30;


citiesNames[568] = 'Lviv';
citiesLatLng[568] = {lat: 49.839683, lng:24.029717};
citiesUrl[568] = 'https://www.numbeo.com/cost-of-living/in/Lviv';
citiesColor[568] = 0;
citiesValues[568] = 24.89;


citiesNames[569] = 'Novosibirsk';
citiesLatLng[569] = {lat: 55.00835259999999, lng:82.9357327};
citiesUrl[569] = 'https://www.numbeo.com/cost-of-living/in/Novosibirsk';
citiesColor[569] = 1;
citiesValues[569] = 32.20;


citiesNames[570] = 'Brussels';
citiesLatLng[570] = {lat: 50.8503396, lng:4.3517103};
citiesUrl[570] = 'https://www.numbeo.com/cost-of-living/in/Brussels';
citiesColor[570] = 12;
citiesValues[570] = 76.88;


citiesNames[571] = 'Gent';
citiesLatLng[571] = {lat: 51.05665, lng:3.72};
citiesUrl[571] = 'https://www.numbeo.com/cost-of-living/in/Gent';
citiesColor[571] = 14;
citiesValues[571] = 81.26;


citiesNames[572] = 'Surabaya';
citiesLatLng[572] = {lat: -7.2574719, lng:112.7520883};
citiesUrl[572] = 'https://www.numbeo.com/cost-of-living/in/Surabaya';
citiesColor[572] = 4;
citiesValues[572] = 44.10;

console.log(citiesNames.toString());

