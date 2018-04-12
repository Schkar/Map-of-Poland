
document.addEventListener('DOMContentLoaded',function(){
    
    const mapEZero = 14.07, //X-axis
    mapNZero = 54.90, //Y-axis
    mapEFull = 24.27,//X-axis
    mapNFull = 49.00 //Y-axis

    const degN = 950/Math.abs(mapNZero - mapNFull),
    degE = 1000/Math.abs(mapEZero - mapEFull);

    const cities = [
        { name: "Aleksandrów Kujawski", N: 52.88, E: 18.70, active: false },
        { name: "Aleksandrów Łódzki", N: 51.82, E: 19.29, active: false },
        { name: "Andrychów", N: 49.86, E: 19.33, active: false },
        { name: "Augustów", N: 53.83, E: 23.00, active: false },
        { name: "Barlinek", N: 52.99, E: 15.19, active: false },
        { name: "Bartoszyce", N: 54.24, E: 20.80, active: false },
        { name: "Będzin", N: 50.34, E: 19.12, active: false },
        { name: "Bełchatów", N: 51.36, E: 19.36, active: false },
        { name: "Biała Podlaska", N: 52.03, E: 23.11, active: false },
        { name: "Białogard", N: 54.00, E: 15.97, active: false },
        { name: "Białystok", N: 53.13, E: 23.15, active: false },
        { name: "Bielawa", N: 50.68, E: 16.61, active: false },
        { name: "Bielsk Podlaski", N: 52.78, E: 23.29, active: false },
        { name: "Bielsko-Biała", N: 49.81, E: 19.04, active: false },
        { name: "Bieruń", N: 50.10, E: 19.10, active: false },
        { name: "Biłgoraj", N: 50.53, E: 22.72, active: false },
        { name: "Biskupiec", N: 53.87, E: 20.95, active: false },
        { name: "Blachownia", N: 50.79, E: 18.95, active: false },
        { name: "Błonie", N: 52.19, E: 20.62, active: false },
        { name: "Bochnia", N: 49.97, E: 20.42, active: false },
        { name: "Bogatynia", N: 50.91, E: 14.96, active: false },
        { name: "Boguszów-Gorce", N: 50.76, E: 16.18, active: false },
        { name: "Bolesławiec", N: 51.25, E: 15.56, active: false },
        { name: "Braniewo", N: 54.39, E: 19.81, active: false },
        { name: "Brodnica", N: 53.25, E: 19.39, active: false },
        { name: "Brwinów", N: 52.17, E: 20.79, active: false },
        { name: "Brzeg", N: 50.84, E: 17.47, active: false },
        { name: "Brzeg Dolny", N: 51.27, E: 16.73, active: false },
        { name: "Brzesko", N: 49.96, E: 20.60, active: false },
        { name: "Brzeszcze", N: 49.99, E: 19.14, active: false },
        { name: "Brzeziny", N: 51.80, E: 19.74, active: false },
        { name: "Bukowno", N: 50.29, E: 19.44, active: false },
        { name: "Busko-Zdrój", N: 50.47, E: 20.71, active: false },
        { name: "Bydgoszcz", N: 53.12, E: 18.01, active: false },
        { name: "Bystrzyca Kłodzka", N: 50.29, E: 16.63, active: false },
        { name: "Bytom", N: 50.34, E: 18.90, active: false },
        { name: "Bytów", N: 54.17, E: 17.47, active: false },
        { name: "Chełm", N: 51.13, E: 23.49, active: false },
        { name: "Chełmek", N: 50.11, E: 19.24, active: false },
        { name: "Chełmno", N: 53.35, E: 18.42, active: false },
        { name: "Chełmża", N: 53.18, E: 18.60, active: false },
        { name: "Chodzież", N: 52.98, E: 16.91, active: false },
        { name: "Chojnice", N: 53.70, E: 17.56, active: false },
        { name: "Chojnów", N: 51.28, E: 15.93, active: false },
        { name: "Chorzów", N: 50.29, E: 19.03, active: false },
        { name: "Choszczno", N: 53.18, E: 15.40, active: false },
        { name: "Chrzanów", N: 50.13, E: 19.39, active: false },
        { name: "Ciechanów", N: 52.88, E: 20.62, active: false },
        { name: "Ciechocinek", N: 52.88, E: 18.79, active: false },
        { name: "Cieszyn", N: 49.75, E: 18.62, active: false },
        { name: "Czarna Białostocka", N: 53.58, E: 22.57, active: false },
        { name: "Czarnków", N: 52.91, E: 16.54, active: false },
        { name: "Czechowice-Dziedzice", N: 49.91, E: 19.02, active: false },
        { name: "Czeladź", N: 50.32, E: 19.12, active: false },
        { name: "Czersk", N: 53.80, E: 17.97, active: false },
        { name: "Czerwionka-Leszczyny", N: 50.17, E: 18.68, active: false },
        { name: "Częstochowa", N: 50.81, E: 19.12, active: false },
        { name: "Człuchów", N: 53.67, E: 17.35, active: false },
        { name: "Dąbrowa Górnicza", N: 50.33, E: 19.18, active: false },
        { name: "Dąbrowa Tarnowska", N: 50.17, E: 21.00, active: false },
        { name: "Darłowo", N: 54.41, E: 16.41, active: false },
        { name: "Dębica", N: 50.06, E: 21.42, active: false },
        { name: "Dęblin", N: 51.56, E: 21.83, active: false },
        { name: "Dębno", N: 52.74, E: 14.69, active: false },
        { name: "Dobre Miasto", N: 53.99, E: 20.39, active: false },
        { name: "Drawsko Pomorskie", N: 53.52, E: 15.80, active: false },
        { name: "Drezdenko", N: 52.82, E: 15.82, active: false },
        { name: "Działdowo", N: 53.22, E: 20.18, active: false },
        { name: "Dzierżoniów", N: 50.72, E: 16.65, active: false },
        { name: "Elbląg", N: 54.17, E: 19.39, active: false },
        { name: "Ełk", N: 53.83, E: 22.35, active: false },
        { name: "Garwolin", N: 51.90, E: 21.62, active: false },
        { name: "Gdańsk", N: 54.36, E: 18.63, active: false },
        { name: "Gdynia", N: 54.52, E: 18.53, active: false },
        { name: "Giżycko", N: 54.04, E: 21.75, active: false },
        { name: "Gliwice", N: 50.31, E: 18.66, active: false },
        { name: "Głogów", N: 51.66, E: 16.08, active: false },
        { name: "Głowno", N: 51.97, E: 19.70, active: false },
        { name: "Glubczyce", N: 50.18, E: 17.83, active: false },
        { name: "Głuchołazy", N: 50.32, E: 17.37, active: false },
        { name: "Gniezno", N: 52.53, E: 17.61, active: false },
        { name: "Gołdap", N: 54.31, E: 22.30, active: false },
        { name: "Goleniów", N: 53.57, E: 14.81, active: false },
        { name: "Golub-Dobrzyń", N: 53.11, E: 19.04, active: false },
        { name: "Góra", N: 51.66, E: 16.52, active: false },
        { name: "Góra Kalwaria", N: 51.99, E: 21.20, active: false },
        { name: "Gorlice", N: 49.67, E: 21.15, active: false },
        { name: "Gorzów Wielkopolski", N: 52.74, E: 15.23, active: false },
        { name: "Gostyń", N: 51.87, E: 17.00, active: false },
        { name: "Gostynin", N: 53.43, E: 19.43, active: false },
        { name: "Grajewo", N: 53.65, E: 22.44, active: false },
        { name: "Grodków", N: 50.70, E: 17.37, active: false },
        { name: "Grodzisk Mazowiecki", N: 52.10, E: 20.62, active: false },
        { name: "Grodzisk Wielkopolski", N: 52.23, E: 16.36, active: false },
        { name: "Grójec", N: 51.87, E: 20.85, active: false },
        { name: "Grudziądz", N: 53.49, E: 18.74, active: false },
        { name: "Gryfice", N: 53.91, E: 15.19, active: false },
        { name: "Gryfino", N: 53.22, E: 14.47, active: false },
        { name: "Gubin", N: 51.95, E: 14.71, active: false },
        { name: "Hajnówka", N: 52.72, E: 23.57, active: false },
        { name: "Hrubieszów", N: 50.81, E: 23.88, active: false },
        { name: "Iława", N: 53.58, E: 19.56, active: false },
        { name: "Inowrocław", N: 52.78, E: 18.24, active: false },
        { name: "Janikowo", N: 52.42, E: 17.03, active: false },
        { name: "Janów Lubelski", N: 50.71, E: 22.41, active: false },
        { name: "Jarocin", N: 51.97, E: 17.49, active: false },
        { name: "Jarosław", N: 50.02, E: 22.67, active: false },
        { name: "Jasło", N: 49.73, E: 21.46, active: false },
        { name: "Jastrzębie-Zdroj", N: 49.99, E: 18.59, active: false },
        { name: "Jawor", N: 51.06, E: 16.20, active: false },
        { name: "Jaworzno", N: 50.20, E: 19.27, active: false },
        { name: "Jędrzejow", N: 50.65, E: 20.29, active: false },
        { name: "Jelcz-Laskowice", N: 51.02, E: 17.29, active: false },
        { name: "Jelenia Góra", N: 50.90, E: 15.72, active: false },
        { name: "Józefów", N: 52.15, E: 21.26, active: false },
        { name: "Kalety", N: 50.57, E: 18.89, active: false },
        { name: "Kalisz", N: 51.77, E: 18.10, active: false },
        { name: "Kamień Pomorski", N: 53.97, E: 14.77, active: false },
        { name: "Kamienna Góra", N: 50.79, E: 16.03, active: false },
        { name: "Karczew", N: 52.08, E: 21.24, active: false },
        { name: "Kartuzy", N: 54.32, E: 18.20, active: false },
        { name: "Katowice", N: 50.25, E: 19.02, active: false },
        { name: "Kędzierzyn-Koźle", N: 50.34, E: 18.20, active: false },
        { name: "Kępno", N: 51.28, E: 18.00, active: false },
        { name: "Kętrzyn", N: 54.07, E: 21.37, active: false },
        { name: "Kęty", N: 49.87, E: 19.21, active: false },
        { name: "Kielce", N: 50.88, E: 20.64, active: false },
        { name: "Kłobuck", N: 50.90, E: 18.94, active: false },
        { name: "Kłodzko", N: 50.43, E: 16.65, active: false },
        { name: "Kluczbork", N: 50.98, E: 18.20, active: false },
        { name: "Knurów", N: 50.22, E: 18.66, active: false },
        { name: "Kobyłka", N: 52.33, E: 21.20, active: false },
        { name: "Kolno", N: 53.41, E: 21.92, active: false },
        { name: "Koło", N: 52.19, E: 18.63, active: false },
        { name: "Kołobrzeg", N: 54.18, E: 15.56, active: false },
        { name: "Koluszki", N: 51.75, E: 19.81, active: false },
        { name: "Konin", N: 52.20, E: 18.24, active: false },
        { name: "Końskie", N: 51.20, E: 20.39, active: false },
        { name: "Konstancin-Jeziorna", N: 52.09, E: 21.11, active: false },
        { name: "Konstantynów Łódzki", N: 51.75, E: 19.31, active: false },
        { name: "Koronowo", N: 53.31, E: 17.92, active: false },
        { name: "Kościan", N: 52.09, E: 16.63, active: false },
        { name: "Koscierzyna", N: 54.13, E: 17.97, active: false },
        { name: "Kostrzyn", N: 52.58, E: 14.64, active: false },
        { name: "Koszalin", N: 54.18, E: 16.18, active: false },
        { name: "Kowary", N: 50.79, E: 15.82, active: false },
        { name: "Kozienice", N: 51.59, E: 21.55, active: false },
        { name: "Kożuchów", N: 51.75, E: 15.60, active: false },
        { name: "Kraków", N: 50.06, E: 19.95, active: false },
        { name: "Krapkowice", N: 50.47, E: 17.96, active: false },
        { name: "Krasnik", N: 50.92, E: 22.21, active: false },
        { name: "Krasnystaw", N: 50.99, E: 23.17, active: false },
        { name: "Krosno", N: 49.70, E: 21.75, active: false },
        { name: "Krosno Odrzańskie", N: 52.06, E: 15.10, active: false },
        { name: "Krotoszyn", N: 51.70, E: 17.43, active: false },
        { name: "Kruszwica", N: 52.68, E: 18.29, active: false },
        { name: "Krynica", N: 49.41, E: 20.95, active: false },
        { name: "Krzeszowice", N: 50.13, E: 19.63, active: false },
        { name: "Kudowa-Zdrój", N: 50.42, E: 16.22, active: false },
        { name: "Kutno", N: 52.24, E: 19.36, active: false },
        { name: "Kwidzyn", N: 53.74, E: 18.93, active: false },
        { name: "Lębork", N: 54.54, E: 17.75, active: false },
        { name: "Ledziny", N: 50.13, E: 19.05, active: false },
        { name: "Legionowo", N: 52.40, E: 20.92, active: false },
        { name: "Legnica", N: 51.20, E: 16.15, active: false },
        { name: "Leszno", N: 51.84, E: 16.57, active: false },
        { name: "Leżajsk", N: 50.25, E: 22.42, active: false },
        { name: "Libiąż", N: 50.10, E: 19.29, active: false },
        { name: "Lidzbark Warmiński", N: 54.13, E: 20.59, active: false },
        { name: "Limanowa", N: 49.70, E: 20.41, active: false },
        { name: "Lipno", N: 52.83, E: 19.16, active: false },
        { name: "Lobez", N: 53.64, E: 15.62, active: false },
        { name: "Lubaczów", N: 50.16, E: 23.11, active: false },
        { name: "Lubań", N: 51.11, E: 15.28, active: false },
        { name: "Lubartów", N: 51.45, E: 22.61, active: false },
        { name: "Lubawa", N: 53.50, E: 19.74, active: false },
        { name: "Lubin", N: 51.39, E: 16.20, active: false },
        { name: "Lublin", N: 51.24, E: 22.57, active: false },
        { name: "Lubliniec", N: 50.66, E: 18.68, active: false },
        { name: "Luboń", N: 52.33, E: 16.87, active: false },
        { name: "Lubsko", N: 51.79, E: 14.96, active: false },
        { name: "Lwowek Slaski", N: 51.11, E: 15.60, active: false },
        { name: "Łańcut", N: 50.06, E: 22.22, active: false },
        { name: "Łapy", N: 52.98, E: 22.89, active: false },
        { name: "Łask", N: 51.60, E: 19.14, active: false },
        { name: "Łaziska Gorne", N: 50.17, E: 18.77, active: false },
        { name: "Łęczna", N: 51.31, E: 22.87, active: false },
        { name: "Łęczyca", N: 52.06, E: 19.19, active: false },
        { name: "Łódź", N: 51.77, E: 19.45, active: false },
        { name: "Łomianki", N: 52.34, E: 20.88, active: false },
        { name: "Łomża", N: 53.18, E: 22.07, active: false },
        { name: "Łuków", N: 51.94, E: 22.39, active: false },
        { name: "Maków Mazowiecki", N: 52.86, E: 21.10, active: false },
        { name: "Malbork", N: 54.04, E: 19.04, active: false },
        { name: "Marki", N: 52.32, E: 21.11, active: false },
        { name: "Miastko", N: 54.00, E: 16.96, active: false },
        { name: "Miechów", N: 50.36, E: 20.01, active: false },
        { name: "Miedzychod", N: 52.61, E: 15.89, active: false },
        { name: "Miedzyrzec Podlaski", N: 51.99, E: 22.78, active: false },
        { name: "Miedzyrzecz", N: 52.45, E: 15.56, active: false },
        { name: "Mielec", N: 50.29, E: 21.43, active: false },
        { name: "Mikolów", N: 50.23, E: 18.96, active: false },
        { name: "Milanówek", N: 52.13, E: 20.65, active: false },
        { name: "Milicz", N: 51.53, E: 17.27, active: false },
        { name: "Mińsk Mazowiecki", N: 52.17, E: 21.55, active: false },
        { name: "Mława", N: 53.12, E: 20.36, active: false },
        { name: "Mogilno", N: 52.65, E: 17.96, active: false },
        { name: "Mońki", N: 53.40, E: 22.78, active: false },
        { name: "Morąg", N: 53.91, E: 19.93, active: false },
        { name: "Mosina", N: 52.25, E: 16.84, active: false },
        { name: "Mrągowo", N: 53.88, E: 21.30, active: false },
        { name: "Murowana Goślina", N: 52.58, E: 17.01, active: false },
        { name: "Myślenice", N: 49.83, E: 19.93, active: false },
        { name: "Myśliborz", N: 52.92, E: 14.86, active: false },
        { name: "Mysłowice", N: 50.24, E: 19.14, active: false },
        { name: "Myszków", N: 50.58, E: 19.31, active: false },
        { name: "Nakło nad Notecia", N: 53.13, E: 17.59, active: false },
        { name: "Namysłów", N: 51.07, E: 17.71, active: false },
        { name: "Nidzica", N: 53.36, E: 20.42, active: false },
        { name: "Nisko", N: 50.52, E: 22.13, active: false },
        { name: "Nowa Dęba", N: 50.43, E: 21.75, active: false },
        { name: "Nowa Ruda", N: 50.59, E: 16.50, active: false },
        { name: "Nowa Sól", N: 51.80, E: 15.70, active: false },
        { name: "Nowe Miasto Lubawskie", N: 53.43, E: 19.59, active: false },
        { name: "Nowogard", N: 53.66, E: 15.10, active: false },
        { name: "Nowy Dwór Gdański", N: 54.22, E: 19.12, active: false },
        { name: "Nowy Dwór Mazowiecki", N: 52.42, E: 20.70, active: false },
        { name: "Nowy Sącz", N: 49.63, E: 20.69, active: false },
        { name: "Nowy Targ", N: 49.48, E: 20.03, active: false },
        { name: "Nowy Tomyśl", N: 52.31, E: 16.12, active: false },
        { name: "Nysa", N: 50.47, E: 17.33, active: false },
        { name: "Oborniki", N: 52.65, E: 16.80, active: false },
        { name: "Oława", N: 50.94, E: 17.29, active: false },
        { name: "Olecko", N: 54.04, E: 22.50, active: false },
        { name: "Oleśnica", N: 51.20, E: 17.37, active: false },
        { name: "Olesno", N: 50.88, E: 18.40, active: false },
        { name: "Olkusz", N: 50.27, E: 19.54, active: false },
        { name: "Olsztyn", N: 53.77, E: 20.48, active: false },
        { name: "Opalenica", N: 52.31, E: 16.39, active: false },
        { name: "Opoczno", N: 51.37, E: 20.28, active: false },
        { name: "Opole", N: 50.67, E: 17.94, active: false },
        { name: "Opole Lubelskie", N: 51.14, E: 21.96, active: false },
        { name: "Orneta", N: 54.11, E: 20.12, active: false },
        { name: "Orzesze", N: 50.16, E: 18.77, active: false },
        { name: "Ostróda", N: 53.71, E: 19.95, active: false },
        { name: "Ostrołęka", N: 53.09, E: 21.56, active: false },
        { name: "Ostrów Mazowiecki", N: 52.79, E: 21.90, active: false },
        { name: "Ostrów Wielkopolski", N: 51.66, E: 17.79, active: false },
        { name: "Ostrowiec Świętokrzyski", N: 50.95, E: 21.38, active: false },
        { name: "Ostrzeszów", N: 51.41, E: 17.95, active: false },
        { name: "Oświecim", N: 50.03, E: 19.25, active: false },
        { name: "Otwock", N: 52.10, E: 21.28, active: false },
        { name: "Ozimek", N: 50.68, E: 18.21, active: false },
        { name: "Ozorków", N: 51.96, E: 19.29, active: false },
        { name: "Pabianice", N: 51.66, E: 19.35, active: false },
        { name: "Parczew", N: 51.63, E: 22.90, active: false },
        { name: "Pasłęk", N: 54.06, E: 19.65, active: false },
        { name: "Piaseczno", N: 52.06, E: 21.02, active: false },
        { name: "Piastów", N: 52.20, E: 20.92, active: false },
        { name: "Piekary Śląskie", N: 50.40, E: 18.95, active: false },
        { name: "Pieszyce", N: 50.72, E: 16.59, active: false },
        { name: "Piła", N: 53.14, E: 16.73, active: false },
        { name: "Pińczów", N: 50.53, E: 20.52, active: false },
        { name: "Pionki", N: 51.49, E: 21.45, active: false },
        { name: "Piotrków Trybunalski", N: 51.40, E: 19.70, active: false },
        { name: "Pisz", N: 53.63, E: 21.79, active: false },
        { name: "Pleszew", N: 51.90, E: 17.77, active: false },
        { name: "Płock", N: 52.55, E: 19.70, active: false },
        { name: "Płonsk", N: 52.62, E: 20.37, active: false },
        { name: "Polaniec", N: 50.42, E: 21.28, active: false },
        { name: "Polczyn-Zdrój", N: 53.77, E: 16.10, active: false },
        { name: "Police", N: 53.54, E: 14.55, active: false },
        { name: "Polkowice", N: 51.50, E: 16.04, active: false },
        { name: "Poniatowa", N: 51.18, E: 22.12, active: false },
        { name: "Poręba", N: 50.48, E: 19.33, active: false },
        { name: "Poznań", N: 52.39, E: 16.90, active: false },
        { name: "Prudnik", N: 50.33, E: 17.56, active: false },
        { name: "Pruszcz Gdański", N: 54.25, E: 18.64, active: false },
        { name: "Pruszków", N: 52.22, E: 20.81, active: false },
        { name: "Przasnysz", N: 53.01, E: 20.87, active: false },
        { name: "Przemyśl", N: 49.79, E: 22.78, active: false },
        { name: "Przeworsk", N: 50.06, E: 22.50, active: false },
        { name: "Pszczyna", N: 49.97, E: 18.95, active: false },
        { name: "Pszów", N: 50.03, E: 18.40, active: false },
        { name: "Puck", N: 54.70, E: 18.40, active: false },
        { name: "Puławy", N: 51.43, E: 21.98, active: false },
        { name: "Pułtusk", N: 52.71, E: 21.08, active: false },
        { name: "Pyrzyce", N: 53.13, E: 14.87, active: false },
        { name: "Pyskowice", N: 50.41, E: 18.62, active: false },
        { name: "Rabka", N: 49.61, E: 19.93, active: false },
        { name: "Raciborz", N: 50.09, E: 18.21, active: false },
        { name: "Radlin", N: 50.03, E: 18.45, active: false },
        { name: "Radom", N: 51.39, E: 21.15, active: false },
        { name: "Radomsko", N: 51.06, E: 19.44, active: false },
        { name: "Radzionków", N: 50.39, E: 18.88, active: false },
        { name: "Radzyn Podlaski", N: 51.79, E: 22.62, active: false },
        { name: "Rawa Mazowiecka", N: 51.77, E: 20.26, active: false },
        { name: "Rawicz", N: 51.60, E: 16.86, active: false },
        { name: "Reda", N: 54.62, E: 18.34, active: false },
        { name: "Rogożno", N: 52.75, E: 16.97, active: false },
        { name: "Ropczyce", N: 50.06, E: 21.74, active: false },
        { name: "Ruda Śląska", N: 50.29, E: 18.88, active: false },
        { name: "Rumia", N: 54.59, E: 18.37, active: false },
        { name: "Rybnik", N: 50.10, E: 18.54, active: false },
        { name: "Rydultowy", N: 50.06, E: 18.42, active: false },
        { name: "Ryki", N: 51.63, E: 21.92, active: false },
        { name: "Rypin", N: 53.06, E: 19.41, active: false },
        { name: "Rzeszów", N: 50.04, E: 21.99, active: false },
        { name: "Sandomierz", N: 50.68, E: 21.74, active: false },
        { name: "Sanok", N: 49.57, E: 22.20, active: false },
        { name: "Sępólno Krajeńskie", N: 53.44, E: 17.53, active: false },
        { name: "Siedlce", N: 52.16, E: 22.28, active: false },
        { name: "Siemianowice Śląskie", N: 50.33, E: 19.04, active: false },
        { name: "Siemiatycze", N: 52.41, E: 22.87, active: false },
        { name: "Sieradz", N: 51.60, E: 18.74, active: false },
        { name: "Sierpc", N: 52.86, E: 19.65, active: false },
        { name: "Skarzysko-Kamienna", N: 51.11, E: 20.87, active: false },
        { name: "Skawina", N: 49.97, E: 19.83, active: false },
        { name: "Skierniewice", N: 51.95, E: 20.13, active: false },
        { name: "Skoczów", N: 49.80, E: 18.79, active: false },
        { name: "Skwierzyna", N: 52.58, E: 15.48, active: false },
        { name: "Sławno", N: 54.34, E: 16.67, active: false },
        { name: "Słubice", N: 52.35, E: 14.56, active: false },
        { name: "Słupca", N: 52.29, E: 17.87, active: false },
        { name: "Słupsk", N: 54.47, E: 17.01, active: false },
        { name: "Sochaczew", N: 52.23, E: 20.22, active: false },
        { name: "Sokółka", N: 53.40, E: 23.50, active: false },
        { name: "Sokołow Podlaski", N: 52.40, E: 22.23, active: false },
        { name: "Solec Kujawski", N: 53.06, E: 18.23, active: false },
        { name: "Sopot", N: 54.43, E: 18.55, active: false },
        { name: "Sosnowiec", N: 50.27, E: 19.12, active: false },
        { name: "Stalowa Wola", N: 50.57, E: 22.04, active: false },
        { name: "Starachowice", N: 51.06, E: 21.07, active: false },
        { name: "Stargard Szczeciński", N: 53.34, E: 15.02, active: false },
        { name: "Starogard Gdański", N: 53.97, E: 18.52, active: false },
        { name: "Stary Sącz", N: 49.57, E: 20.64, active: false },
        { name: "Staszów", N: 50.56, E: 21.18, active: false },
        { name: "Strzegom", N: 50.95, E: 16.35, active: false },
        { name: "Strzelce Krajenskie", N: 52.86, E: 15.52, active: false },
        { name: "Strzelce Opolskie", N: 50.52, E: 18.29, active: false },
        { name: "Strzelin", N: 50.78, E: 17.06, active: false },
        { name: "Sucha Beskidzka", N: 49.75, E: 19.59, active: false },
        { name: "Suchedniów", N: 51.06, E: 20.83, active: false },
        { name: "Sulechów", N: 52.09, E: 15.62, active: false },
        { name: "Sulecin", N: 52.45, E: 15.10, active: false },
        { name: "Sulejówek", N: 52.25, E: 21.27, active: false },
        { name: "Suwałki", N: 54.10, E: 22.94, active: false },
        { name: "Swarzędz", N: 52.40, E: 17.06, active: false },
        { name: "Syców", N: 51.30, E: 17.70, active: false },
        { name: "Szamotuły", N: 52.61, E: 16.58, active: false },
        { name: "Szczecin", N: 53.43, E: 14.52, active: false },
        { name: "Szczecinek", N: 53.71, E: 16.68, active: false },
        { name: "Szczytno", N: 53.55, E: 20.99, active: false },
        { name: "Szprotawa", N: 51.56, E: 15.52, active: false },
        { name: "Sztum", N: 53.84, E: 18.95, active: false },
        { name: "Szubin", N: 53.01, E: 17.71, active: false },
        { name: "Szydłowiec", N: 51.22, E: 20.85, active: false },
        { name: "Śrem", N: 52.09, E: 17.01, active: false },
        { name: "Środa Wielkopolska", N: 52.22, E: 17.27, active: false },
        { name: "Świdnica", N: 50.84, E: 16.48, active: false },
        { name: "Świdnik", N: 51.21, E: 22.79, active: false },
        { name: "Świdwin", N: 53.77, E: 15.77, active: false },
        { name: "Świebodzice", N: 50.86, E: 16.32, active: false },
        { name: "Świebodzin", N: 52.25, E: 15.52, active: false },
        { name: "Świecie", N: 53.40, E: 18.44, active: false },
        { name: "Świętochłowice", N: 50.29, E: 18.94, active: false },
        { name: "Świnoujście", N: 53.90, E: 14.24, active: false },
        { name: "Tarnobrzeg", N: 50.59, E: 21.68, active: false },
        { name: "Tarnów", N: 50.00, E: 20.99, active: false },
        { name: "Tarnowskie Góry", N: 50.45, E: 18.86, active: false },
        { name: "Tczew", N: 54.09, E: 18.77, active: false },
        { name: "Tomaszów Lubelski", N: 50.45, E: 23.41, active: false },
        { name: "Tomaszów Mazowiecki", N: 51.54, E: 20.03, active: false },
        { name: "Toruń", N: 53.02, E: 18.60, active: false },
        { name: "Trzcianka", N: 53.04, E: 16.45, active: false },
        { name: "Trzebiatów", N: 54.06, E: 15.26, active: false },
        { name: "Trzebinia", N: 50.16, E: 19.45, active: false },
        { name: "Trzebnica", N: 51.31, E: 17.06, active: false },
        { name: "Tuchola", N: 53.58, E: 17.85, active: false },
        { name: "Turek", N: 52.02, E: 18.47, active: false },
        { name: "Tychy", N: 50.16, E: 19.00, active: false },
        { name: "Ustka", N: 54.58, E: 16.85, active: false },
        { name: "Ustroń", N: 49.71, E: 18.79, active: false },
        { name: "Ustrzyki Dolne", N: 49.43, E: 22.61, active: false },
        { name: "Wabrzezno", N: 53.28, E: 18.94, active: false },
        { name: "Wadowice", N: 49.87, E: 19.48, active: false },
        { name: "Wągrowiec", N: 52.81, E: 17.20, active: false },
        { name: "Wałbrzych", N: 50.78, E: 16.28, active: false },
        { name: "Wałcz", N: 53.27, E: 16.47, active: false },
        { name: "Warka", N: 51.79, E: 21.19, active: false },
        { name: "Warszawa", N: 52.25, E: 21.02, active: false },
        { name: "Węgorzewo", N: 54.22, E: 21.74, active: false },
        { name: "Węgrów", N: 52.39, E: 22.01, active: false },
        { name: "Wejherowo", N: 54.59, E: 18.23, active: false },
        { name: "Wesoła", N: 52.25, E: 21.20, active: false },
        { name: "Wieliczka", N: 49.99, E: 20.09, active: false },
        { name: "Wieluń", N: 51.21, E: 18.56, active: false },
        { name: "Wisła", N: 49.65, E: 18.87, active: false },
        { name: "Władysławowo", N: 54.78, E: 18.40, active: false },
        { name: "Włocławek", N: 52.65, E: 19.05, active: false },
        { name: "Włodawa", N: 51.54, E: 23.55, active: false },
        { name: "Włoszczowa", N: 50.86, E: 19.96, active: false },
        { name: "Wodzisław Śląski", N: 50.03, E: 18.40, active: false },
        { name: "Wojkowice", N: 50.36, E: 19.01, active: false },
        { name: "Wolbrom", N: 50.39, E: 19.77, active: false },
        { name: "Wolomin", N: 52.33, E: 21.22, active: false },
        { name: "Wołów", N: 51.32, E: 16.62, active: false },
        { name: "Wolsztyn", N: 52.10, E: 16.10, active: false },
        { name: "Wrocław", N: 51.11, E: 17.03, active: false },
        { name: "Wronki", N: 52.70, E: 16.36, active: false },
        { name: "Września", N: 52.32, E: 17.57, active: false },
        { name: "Wschowa", N: 51.79, E: 16.31, active: false },
        { name: "Wysokie Mazowieckie", N: 52.91, E: 22.50, active: false },
        { name: "Wyszków", N: 52.59, E: 21.44, active: false },
        { name: "Ząbkowice Śląskie", N: 50.59, E: 16.81, active: false },
        { name: "Zabrze", N: 50.29, E: 18.77, active: false },
        { name: "Zakopane", N: 49.28, E: 19.95, active: false },
        { name: "Zambrów", N: 52.98, E: 22.23, active: false },
        { name: "Zamość", N: 50.72, E: 23.26, active: false },
        { name: "Zawadzkie", N: 50.61, E: 18.45, active: false },
        { name: "Zawiercie", N: 50.48, E: 19.42, active: false },
        { name: "Zduńska Wola", N: 51.60, E: 18.94, active: false },
        { name: "Zdzieszowice", N: 50.41, E: 18.12, active: false },
        { name: "Zgierz", N: 51.86, E: 19.41, active: false },
        { name: "Zgorzelec", N: 51.14, E: 15.00, active: false },
        { name: "Ziębice", N: 50.59, E: 17.05, active: false },
        { name: "Zielona Gora", N: 51.94, E: 15.48, active: false },
        { name: "Zielonka", N: 52.29, E: 21.16, active: false },
        { name: "Złocieniec", N: 53.52, E: 16.00, active: false },
        { name: "Złotoryja", N: 51.11, E: 15.90, active: false },
        { name: "Złotów", N: 53.35, E: 17.03, active: false },
        { name: "Żabki", N: 52.29, E: 21.11, active: false },
        { name: "Żagań", N: 51.61, E: 15.29, active: false },
        { name: "Żary", N: 51.64, E: 15.13, active: false },
        { name: "Żnin", N: 52.85, E: 17.70, active: false },
        { name: "Żory", N: 50.06, E: 18.68, active: false },
        { name: "Żychlin", N: 52.25, E: 19.62, active: false },
        { name: "Żyrardów", N: 52.06, E: 20.45, active: false },
        { name: "Żywiec", N: 49.87, E: 19.18, active: false },
    ];

    console.log(cities.length)

    const pointRadius = 5;
    const textXModifier = 10;
    const textYModifier = 40;

    const selectCities = document.querySelector(".selectCities");

    const mapSize = document.querySelector(".mapSize");
    const mapSizeValue = document.querySelector(".mapSizeValue");

    const search = document.querySelector(".search");

    const checkAll = document.querySelector(".checkAll");
    const checkNone = document.querySelector(".checkNone");

    let checkboxArray = cities;

    checkAll.addEventListener("click",function(button){
        button.preventDefault()
        cities.forEach(function(e){
            e.active = true;
        })
        checkboxArray.forEach(function(e){
            e.active = true;
        })
        populateCheckboxes(checkboxArray);
        generateCities();
        checkAll.checked = false;
    })

    checkNone.addEventListener("click",function(button){
        button.preventDefault()
        cities.forEach(function(e){
            e.active = false;
        })
        checkboxArray.forEach(function(e){
            e.active = false;
        })
        populateCheckboxes(checkboxArray);
        generateCities();
        checkNone.checked = false;
    })

    map.addEventListener("click",function(e) {
        for (let i = 0; i < map.childNodes.length; i++) {
            if (map.childNodes[i].nodeName === "#text" || map.childNodes[i].nodeName === "text") {
                continue;
            }
            if (map.childNodes[i].getAttribute("class").indexOf("active") > 0) {
                map.childNodes[i].setAttribute("class",map.childNodes[i].getAttribute("class").replace("active",""));
            }
        } 
        if (e.target.getAttribute("class").indexOf("active") > 0) {
            e.target.setAttribute("class","voivodship");
            return;
        }
        e.target.setAttribute("class","voivodship active");
    });

    mapSize.value = 100;
    mapSizeValue.innerText = "600 px";

    mapSize.addEventListener("change",function() {
        document.querySelector(".mapContainer").style.width = Math.round(mapSize.value/100 * 600) +"px";
        document.querySelector(".mapContainer").style.height = Math.round(mapSize.value/100 * 600) +"px";
        mapSizeValue.innerText = Math.round(mapSize.value/100 * 600) +"px";
    });

    search.addEventListener("keyup",function(){
        checkboxArray = cities.filter(function(e){
            if (e.name.toLowerCase().indexOf(search.value.toLowerCase()) >= 0) {
                return e;
            }
        });
        if (checkboxArray.length === 0 && search.value === "") {
            checkboxArray = cities;
            console.log(checkboxArray)
        }
        populateCheckboxes(checkboxArray);
    })

    function populateCheckboxes(array){
        selectCities.innerHTML = "";
        array.forEach(function(element) {
            let newCheckbox = document.createElement("input");
            let newLabel = document.createElement("label");
            newLabel.innerText = element.name
            newCheckbox.setAttribute("value",element.name);
            newCheckbox.setAttribute("type","checkbox");
            newCheckbox.checked = element.active;
            newLabel.appendChild(newCheckbox)
            selectCities.appendChild(newLabel);
        });
    }
    
    selectCities.addEventListener("click", function(e){
        if (e.target.localName === "input") {
            cities.forEach( function(element) { 
                if (element.name === e.target.value){ 
                    element.active = e.target.checked;
                } 
            })
            generateCities();
        }
    })

    function generateCities() {
        document.querySelector(".circles").innerHTML = "";
        cities.forEach(function(element) {
            if (element.active) {
                let x = Math.round((Math.abs(element.E - mapEZero) * degE)*100)/100;
                let y = Math.round((Math.abs(element.N - mapNZero) * degN)*100)/100;
                let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                newCircle.setAttribute("class","city"); //Its for IE...
                newCircle.setAttribute("name",element.name);
                newCircle.setAttribute("cx",x);
                newCircle.setAttribute("cy",y);
                newCircle.setAttribute("r",pointRadius);

                let newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                newText.textContent = element.name;
                newText.setAttribute("x",x - textXModifier);
                newText.setAttribute("y",y + textYModifier);

                document.querySelector(".circles").appendChild(newCircle);
                document.querySelector(".circles").appendChild(newText);
            }
        });
    }
    populateCheckboxes(cities);
});
