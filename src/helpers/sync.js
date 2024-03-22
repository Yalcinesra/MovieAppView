"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;

    /* User */
    const User = require('../models/user')
    await User.deleteMany() // !!! Clear collection.
    await User.create({
        "_id": "65343222b67e9681f937f001",
        "username": "admin",
        "password": "Clarusway*123",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": true,
        "isAdmin": true
    })
    await User.create({
        "_id": "65343222b67e9681f937f002",
        "username": "staff",
        "password": "Clarusway*123",
        "email": "staff@site.com",
        "firstName": "staff",
        "lastName": "staff",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    })
    await User.create({
        "_id": "65343222b67e9681f937f003",
        "username": "test",
        "password": "Clarusway*123",
        "email": "test@site.com",
        "firstName": "test",
        "lastName": "test",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    })

    /* Movie */
    const Movie = require('../models/movie')
    await Movie.deleteMany() // !!! Clear collection.
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc8cc19b72c07e1f31a0d1",
        "categoryId": "65dc8a189a05213233b9b53a",
        "name": "Leo",
        "point": 7.5,
        "image": "https://assets.cdn.moviepilot.de/files/4ad750de80f52afb4d7e04ac96a2579a68a0070f4cccd0005b9360175e8f/copyright/AAAABU5eiR75FZ5AdDkm2THUDmLRgay7d53RsMyHP-pc5JhAXyKMOggsMb1dfLbJWGWbl4IBTwmobIjsFMLkseyIYoCTP4QzFc0AO0TCiXm1tOcN49Y2e1JCEgNb_B6fEWfPB1Bs8g.jpg",
        "description": "Yaşlı bir kertenkele olan Leo, arkadaşı kaplumbağa ile birlikte yıllarıdır bir sınıfta bulunan teraryumda mahsur kalmıştır. Yaşamak için sadece birkaç yılı kaldığını öğrendiğinde Leo, hayatı deneyimlemek için kaçmayı planlar. Ancak bu sırada huysuz bir öğretmen ve öğrencilerinin sorunlarına kapılır.",
        "createdAt": "2024-02-26T13:06:09.951Z",
        "updatedAt": "2024-03-19T12:33:48.227Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc929d9b72c07e1f31a0d3",
        "categoryId": "65dc8a0d9a05213233b9b538",
        "name": "A Million Miles Away",
        "point": 7,
        "image": "https://images.justwatch.com/poster/307693361/s592/a-million-miles-away",
        "description": "A Million Miles Away, uzaya giden ilk göçmen çiftlik işçisi Jose Hernandez'in hayat hikayesini kou ediyor. Meksika’da doğan Jose Hernandez, ailesi ile birlikte tarlada çalışarak geçirdiği çocukluk döneminin ardından, bir uzay mekiği mürettebatı üyesi olmak için çabalar.",
        "createdAt": "2024-02-26T13:31:09.132Z",
        "updatedAt": "2024-02-26T13:31:09.132Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc92b29b72c07e1f31a0d5",
        "categoryId": "65dc8a189a05213233b9b53a",
        "name": "Chicken Run 2",
        "point": 6,
        "image": "https://de.web.img3.acsta.net/pictures/23/09/05/15/16/3321082.jpg",
        "description": "İlk filmde Bay Tweedy ve karısının çiftliğinde mahkum olarak yaşayan Ginger, Bunty, Fowler ve Babs, ne pahasına olursa olsun çiftlikten kaçmak için mücadele veriyorlardı.",
        "createdAt": "2024-02-26T13:31:30.370Z",
        "updatedAt": "2024-03-19T13:19:48.821Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc92e49b72c07e1f31a0d9",
        "categoryId": "65dc8a0d9a05213233b9b538",
        "name": "Rüzgârı Dizginleyen Çocuk",
        "point": 7,
        "image": "https://m.media-amazon.com/images/I/61mgzDCUtpL._AC_UF894,1000_QL80_.jpg",
        "description": "Özet. The Boy Who Harnessed the Wind, maddi imkansızlıklar sonucu okuldan atılan 13 yaşındaki bir çocuğun hikayesini konu ediyor. William Kamkwamba, Malavili'de yaşayan 13 yaşındaki bir çocuktur. Zeki bir çocuk olan William, ailesinin yaşadığı maddi zorluklar yüzünden çok sevdiği okulundan atılır.",
        "createdAt": "2024-02-26T13:32:20.621Z",
        "updatedAt": "2024-02-26T13:32:20.621Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc92f99b72c07e1f31a0db",
        "categoryId": "65dc8a249a05213233b9b53c",
        "name": "Esaretin Bedeli",
        "point": 9.3,
        "image": "https://1.bp.blogspot.com/-OEsBrewDTA0/XU3oGdhMoXI/AAAAAAAAQ60/Qw_nGYfFES8N_d657MR9cadIs70pFPLogCLcBGAs/s1600/SK-Yay%25C4%25B1n-Posteri.jpg",
        "description": "Esaretin Bedeli, Andy ve Red nameli iki mahkumun parmaklıklar ardında kurdukları dünyanın hikayesini anlatıyor. Andy Dufresne, genç ve başarılı bir bankerdir. Karısını ve karısının sevgilisini öldürmek suçundan yargılanır ve ömür boyu hapis cezası alır.",
        "createdAt": "2024-02-26T13:32:41.818Z",
        "updatedAt": "2024-03-19T13:20:11.021Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc930a9b72c07e1f31a0dd",
        "categoryId": "65dc8a0d9a05213233b9b538",
        "name": "Birlesen Gönüller",
        "point": 5,
        "image": "https://upload.wikimedia.org/wikipedia/tr/4/42/Birle%C5%9Fen_G%C3%B6n%C3%BCller_Poster.jpg",
        "description": "2. Dünya Savaşı döneminde geçen filmde, yolları trajik bir şekilde ayrılan iki aşığın hikayesi ele alınıyor. Niyaz ve Cennet yeni evli bir çifttir. Ancak alevlenen savaş, yaşadıkları köye kadar yaklaşır ve Nazi işgalinden kaçmak isterken yolları ayrılır.",
        "createdAt": "2024-02-26T13:32:58.192Z",
        "updatedAt": "2024-03-19T13:20:24.676Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc931b9b72c07e1f31a0df",
        "categoryId": "65dc8a0d9a05213233b9b538",
        "name": "Selam 1",
        "point": 6.2,
        "image": "https://upload.wikimedia.org/wikipedia/tr/d/d4/Selam_film.jpg",
        "description": "Harun, Zehra ve Adem idealleri olan 3 öğretmendir. Eğitim aşkıyla geride ailelerini, yurtlarını bırakarak, 3 farklı kıtaya doğru yola koyulurlar. Adem, Bosna Hersek’e doğru yollara düşerken, ardında hamile eşini bırakmıştır.",
        "createdAt": "2024-02-26T13:33:15.454Z",
        "updatedAt": "2024-03-19T13:20:47.947Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc932d9b72c07e1f31a0e1",
        "categoryId": "65dc8a189a05213233b9b53a",
        "name": "Migration",
        "point": 6.7,
        "image": "https://upload.wikimedia.org/wikipedia/en/c/cb/Migration_%282023_film%29.jpg",
        "description": "Bir ördek ailesi, aşırı korumacı babalarını hayatlarının tatiline çıkmaya ikna etmeye çalışır.",
        "createdAt": "2024-02-26T13:33:33.385Z",
        "updatedAt": "2024-02-26T13:33:33.385Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc93689b72c07e1f31a0e3",
        "categoryId": "65dc8a189a05213233b9b53a",
        "name": "Soul",
        "point": 8,
        "image": "https://upload.wikimedia.org/wikipedia/tr/9/9b/Soul_afi%C5%9F.jpg",
        "description": "New York'lu bir caz piyanisti, hayatının konserini verdikten sonra kendisini bir anda Dünya ile öbür dünya arasındaki garip bir ülkede sıkışıp kalmış halde bulur.",
        "createdAt": "2024-02-26T13:34:32.972Z",
        "updatedAt": "2024-02-26T13:34:32.972Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc937b9b72c07e1f31a0e5",
        "categoryId": "65dc8a249a05213233b9b53c",
        "name": "Exodus",
        "point": 8,
        "image": "https://pbs.twimg.com/media/GGOaC2GXYAAECYv.jpg",
        "description": "​\n596 / 5.000\nÇeviri sonuçları\nÇeviri sonucu\nTürkiye'de 2016'da yaşanan tartışmalı darbe girişiminin ardından yaşananlar karşısında, bir üniversite öğretim görevlisi, bir polis memuru ve bir Kürt sanatçı terörist olmakla suçlanıyor. Gözaltına alınma tehlikesiyle karşı karşıya kalan kadınlar, evlerini ve sevdiklerini geride bırakıp ülke dışına çıkmak zorunda kalıyor. Türkiye'den yasa dışı olarak kaçırılan bir grup göçmene katılmaktan başka çareleri yok. Exodus, farklı ülkelerden gelen, farklı zulüm biçimleriyle karşı karşıya kalan, ancak hepsi gelecekleri için aynı umudu taşıyan, güvenlik ve özgürlük bulabilecekleri bir yer bulma umuduna sahip bir grup insanın hikayesidir.",
        "createdAt": "2024-02-26T13:34:51.688Z",
        "updatedAt": "2024-02-26T13:34:51.688Z",
        "__v": 0
    })
    await Movie.create({
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc938d9b72c07e1f31a0e7",
        "categoryId": "65dc8a249a05213233b9b53c",
        "name": "Brian Bank",
        "point": 7.2,
        "image": "https://images.moviesanywhere.com/df49c41786e1e5b96b55eff7772a2c5d/abb24c32-0d84-4a05-beea-9813e8212d9e.jpg",
        "description": "Bir futbolcunun NFL'de oynama hayalleri, haksız yere mahkum edilip hapse gönderilmesiyle sona erer. Yıllar sonra adaletsiz bir sistemin içinde adını temize çıkarmak için mücadele eder.",
        "createdAt": "2024-02-26T13:35:09.187Z",
        "updatedAt": "2024-02-26T13:35:09.187Z",
    })

      await Movie.create(
      {
        "likes": [],
        "countOfVisitors": 0,
        "_id": "65dc93a39b72c07e1f31a0e9",
        "categoryId": "65dc8a189a05213233b9b53a",
        "name": "Zootopia",
        "point": 8,
        "image": "https://m.media-amazon.com/images/M/MV5BNTcyODQ5ZjctNzc0Mi00Nzk4LTk5MDctYzdlOGQwY2IyNzQ5XkEyXkFqcGdeQXVyNzg1MDQ1NzA@._V1_.jpg",
        "description": "Antropomorfik hayvanlarla dolu bir şehirde, çaylak bir tavşan polis ve alaycı bir dolandırıcı tilki, bir komployu ortaya çıkarmak için birlikte çalışmalıdır.",
        "createdAt": "2024-02-26T13:35:31.436Z",
        "updatedAt": "2024-02-26T13:35:31.436Z",
        "__v": 0
    })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc93b49b72c07e1f31a0eb",
            "categoryId": "65dc8a0d9a05213233b9b538",
            "name": "Heaven is for real",
            "point": 5.8,
            "image": "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/450401_HeavenIsForReal_2014_1400x2100_CAN.jpg?itok=GJxK95n4",
            "description": "Küçük kasabalı bir baba, oğlunun olağanüstü, hayat değiştiren deneyimini dünyayla paylaşacak cesareti ve inancı bulmalıdır.",
            "createdAt": "2024-02-26T13:35:48.654Z",
            "updatedAt": "2024-02-26T13:35:48.654Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc93da9b72c07e1f31a0ef",
            "categoryId": "65dc8a0d9a05213233b9b538",
            "name": "Wonder",
            "point": 7.9,
            "image": "https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
            "description": "New York Times'ın en çok satan kitabından uyarlanan bu film, beşinci sınıfa başlayan ve ilk kez normal bir ilkokula giden, yüz farklılıkları olan bir çocuk olan August Pullman'ın inanılmaz derecede ilham verici ve iç açıcı hikayesini anlatıyor.",
            "createdAt": "2024-02-26T13:36:26.716Z",
            "updatedAt": "2024-02-26T13:36:26.716Z",
            "__v": 0
        })

      await Movie.create(
        {
            "_id": "65f96b6b2911cc99a482316b",
            "name": "Luka",
            "point": 7.4,
            "image": "https://upload.wikimedia.org/wikipedia/tr/5/59/Luka_afi%C5%9F.jpg",
            "description": "Film, Luca isimli balık şekilli bir deniz yaratığını, onun arkadaşlıklarını ve su dışındaki dünyayı tanıma sürecini anlatmaktadır. Denizin dışında bir yaşamın hayalini kuran Luca'nın ailesi onun suyun dışına çıkıp insana dönüşmesini tehlikeli bulduğu için istemezler",
            "likes": [],
            "countOfVisitors": 0,
            "createdAt": "2024-03-19T10:39:39.682Z",
            "updatedAt": "2024-03-19T10:39:39.682Z",
            "__v": 0
        })
      await Movie.create(
        {
            "_id": "65f97787a9e3c3313a9a08b0",
            "name": "Yukari Bak",
            "point": 8.3,
            "image": "https://tr.web.img4.acsta.net/pictures/bzp/01/130368.jpg",
            "description": "Hayatı boyunca yaşamak istediği macera hayalini gerçekleştirmek için evine binlerce balon bağlayıp Güney Amerika'nın vahşi doğasına doğru yolculuğa çıkan 78 yaşındaki baloncu Carl Fredricksen'ın hikayesinin anlatıldığı yeni bir komedi.",
            "likes": [],
            "countOfVisitors": 0,
            "createdAt": "2024-03-19T11:31:19.395Z",
            "updatedAt": "2024-03-19T11:31:19.395Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc94279b72c07e1f31a0f7",
            "categoryId": "65dc8a249a05213233b9b53c",
            "name": "Ballon",
            "point": 7.5,
            "image": "https://m.media-amazon.com/images/I/61g7yYcUa2L._AC_UF894,1000_QL80_.jpg",
            "description": "Doğu Almanya, 1979. Başlangıçta kendi yaptıkları sıcak hava balonuyla Doğu'dan Batı'ya kaçmayı başaramayan iki aile, ikinci bir girişimde bulunmak için çabalıyor, Doğu Almanya Eyalet Polisi de onları kovalıyor.",
            "createdAt": "2024-02-26T13:37:43.721Z",
            "updatedAt": "2024-02-26T13:37:43.721Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc94169b72c07e1f31a0f5",
            "categoryId": "65dc8a0d9a05213233b9b538",
            "name": "secret superstar",
            "point": 7.8,
            "image": "https://m.media-amazon.com/images/M/MV5BMDc5YjRjODktMjViOS00YzJiLWIzNGItYTc2OTgzNmMwZmJiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            "description": "Aamir Khan and Zaira Wasim in Secret Superstar (2017)\n\nSecret Superstar traces the journey of Insia, a 14 year old girl from Baroda, whose dream of becoming a singer changes her life and the lives of everyone around her.\n\nA talented teenage singer-songwriter living amid domestic abuse becomes a YouTube sensation after a video in which she hides her identity goes viral.",
            "createdAt": "2024-02-26T13:37:26.498Z",
            "updatedAt": "2024-02-26T13:37:26.498Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc94029b72c07e1f31a0f3",
            "categoryId": "65dc8a189a05213233b9b53a",
            "name": "Ferdinand",
            "point": 6.7,
            "image": "https://m.media-amazon.com/images/M/MV5BMjI4Mjk0NzQwOF5BMl5BanBnXkFtZTgwNjg3MjI2MjI@._V1_FMjpg_UX1000_.jpg",
            "description": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.",
            "createdAt": "2024-02-26T13:37:06.571Z",
            "updatedAt": "2024-02-26T13:37:06.571Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc93ef9b72c07e1f31a0f1",
            "categoryId": "65dc8a0d9a05213233b9b538",
            "name": "The midnight sky",
            "point": 5.7,
            "image": "https://m.media-amazon.com/images/M/MV5BNDQwYjJjODMtOWNmNC00NDJjLThiNDgtNzVkOTM1MjY5NDQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            "description": "auto_awesome\nŞu dilden çevir: Almanca\n​\n217 / 5.000\nÇeviri sonuçları\nÇeviri sonucu\nAugustine, Arktis'teki en büyük bilgelerden biri, Sully ve diğer Astronot okulları, Hause zurückzukehren ile birlikte gizemli bir küresel Katastrophe vorfinden'e engel oldu.",
            "createdAt": "2024-02-26T13:36:47.438Z",
            "updatedAt": "2024-02-26T13:36:47.438Z",
            "__v": 0
        })
      await Movie.create(
        {
            "likes": [],
            "countOfVisitors": 0,
            "_id": "65dc93c69b72c07e1f31a0ed",
            "categoryId": "65dc8a189a05213233b9b53a",
            "name": "Ratatouille",
            "point": 8.1,
            "image": "https://m.media-amazon.com/images/I/81n+81eQRuL._AC_UF894,1000_QL80_.jpg",
            "description": "Yemek pişirmeyi bilen bir fare, Paris'in ünlü bir restoranında genç bir mutfak çalışanıyla alışılmadık bir ittifak kurar.",
            "createdAt": "2024-02-26T13:36:06.791Z",
            "updatedAt": "2024-02-27T14:23:59.610Z",
            "__v": 0
        })
      

    /* Category */
    const Category = require('../models/category')
    await Category.deleteMany() // !!! Clear collection.
    await Category.create({
        "_id": "65343222b67e9681f937f201",
        "name": "Family",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f202",
        "name": "Animation",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f203",
        "name": "Adventure",
    })
   


    /* Finished */
    console.log('* Synchronized.')
}