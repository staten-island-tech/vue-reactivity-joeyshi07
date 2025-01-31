const albums = {
  pop: [
    {
      title: '1989',
      artist: 'Taylor Swift',
      genre: 'Pop',
      price: '$24.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png/220px-Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png',
      altText: "Taylor Swift's '1989' album cover, featuring a Polaroid-style photo of her.",
    },
    {
      title: 'Future Nostalgia',
      artist: 'Dua Lipa',
      genre: 'Pop',
      price: '$29.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png/220px-Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png',
      altText: "Dua Lipa's 'Future Nostalgia' album cover featuring a dynamic photo of the artist.",
    },
    {
      title: 'Thriller',
      artist: 'Michael Jackson',
      genre: 'Pop',
      price: '$34.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Michael_Jackson_-_Thriller.png/220px-Michael_Jackson_-_Thriller.png',
      altText: "Michael Jackson's 'Thriller' album cover with a portrait of him.",
    },
    {
      title: 'Confessions',
      artist: 'Usher',
      genre: 'Pop',
      price: '$23.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Usher_-_Confessions_album_cover.png/220px-Usher_-_Confessions_album_cover.png',
      altText: "Usher's 'Confessions' album cover showcasing a close-up of the artist.",
    },
    {
      title: 'Purple Rain',
      artist: 'Prince',
      genre: 'Pop',
      price: '$27.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Princepurplerain.jpg/220px-Princepurplerain.jpg',
      altText: "Prinec's purple rain",
    },
  ],
  rap: [
    {
      title: 'To Pimp a Butterfly',
      artist: 'Kendrick Lamar',
      genre: 'Rap',
      price: '$34.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png/220px-Kendrick_Lamar_-_To_Pimp_a_Butterfly.png',
      altText:
        "Kendrick Lamar's 'To Pimp a Butterfly' album cover with a striking image of a young black man in handcuffs.",
    },
    {
      title: 'The College Dropout',
      artist: 'Kanye West',
      genre: 'Rap',
      price: '$31.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Kanyewest_collegedropout.jpg/220px-Kanyewest_collegedropout.jpg',
      altText:
        "Kanye West's 'The College Dropout' album cover with an image of a bear mascot in a cap and gown.",
    },
    {
      title: 'Illmatic',
      artist: 'Nas',
      genre: 'Rap',
      price: '$29.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/27/IllmaticNas.jpg/220px-IllmaticNas.jpg',
      altText:
        "Nas' 'Illmatic' album cover with a portrait of Nas from his youth against an urban backdrop.",
    },
    {
      title: 'The Marshall Mathers LP',
      artist: 'Eminem',
      genre: 'Rap',
      price: '$34.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/The_Marshall_Mathers_LP.jpg/220px-The_Marshall_Mathers_LP.jpg',
      altText:
        "Eminem's 'The Marshall Mathers LP' album cover with a photo of Eminem's childhood home.",
    },
    {
      title: 'ATliens',
      artist: 'OutKast',
      genre: 'Rap',
      price: '$38.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Outkast-atliens.jpg/220px-Outkast-atliens.jpg',
      altText: "OutKast's 'ATlien' album cover ",
    },
  ],
  rnb: [
    {
      title: 'Confessions',
      artist: 'Usher',
      genre: 'R&B',
      price: '$23.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Usher_-_Confessions_album_cover.png/220px-Usher_-_Confessions_album_cover.png',
      altText: "Usher's 'Confessions' album cover with a close-up of the artist.",
    },
    {
      title: 'Channel Orange',
      artist: 'Frank Ocean',
      genre: 'R&B',
      price: '$28.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Channel_ORANGE.jpg/220px-Channel_ORANGE.jpg',
      altText: "Frank Ocean's 'Channel Orange' album cover with a minimalist design.",
    },
    {
      title: 'Voodoo',
      artist: "D'Angelo",
      genre: 'R&B',
      price: '$27.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/98/D%27Angelo_Voodoo.png',
      altText:
        "D'Angelo's 'Voodoo' album cover with a dark, atmospheric background and a close-up photo of the artist.",
    },
    {
      title: 'The Miseducation of Lauryn Hill',
      artist: 'Lauryn Hill',
      genre: 'R&B',
      price: '$24.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Miseducation_of_Lauryn_Hill.jpg',
      altText:
        "Lauryn Hill's 'The Miseducation of Lauryn Hill' album cover with a portrait of her.",
    },
    {
      title: 'Back to Black',
      artist: 'Amy Winehouse',
      genre: 'R&B',
      price: '$29.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Amy_Winehouse_-_Back_to_Black.png',
      altText: "Amy Winehouse's 'Back to Black' album cover featuring her portrait.",
    },
  ],
  jazz: [
    {
      title: 'Kind of Blue',
      artist: 'Miles Davis',
      genre: 'Jazz',
      price: '$33.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Miles_Davis_-_Kind_of_Blue.jpg',
      altText: "Miles Davis' 'Kind of Blue' album cover with an abstract design.",
    },
    {
      title: 'A Love Supreme',
      artist: 'John Coltrane',
      genre: 'Jazz',
      price: '$29.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/06/John_Coltrane_A_Love_Supreme.jpg',
      altText: "John Coltrane's 'A Love Supreme' album cover symbolizing spirituality.",
    },
    {
      title: 'Mingus Ah Um',
      artist: 'Charles Mingus',
      genre: 'Jazz',
      price: '$32.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/34/Charles_Mingus_Mingus_Ah_Um.png',
      altText: "Charles Mingus' 'Mingus Ah Um' album cover with a drawing of Mingus.",
    },
    {
      title: 'Time Out',
      artist: 'The Dave Brubeck Quartet',
      genre: 'Jazz',
      price: '$24.99',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Time_Out_Columbia.jpg',
      altText:
        "The Dave Brubeck Quartet's 'Time Out' album cover with abstract geometric patterns.",
    },
    {
      title: 'The Shape of Jazz to Come',
      artist: 'Ornette Coleman',
      genre: 'Jazz',
      price: '$35.99',
      image:
        'https://upload.wikimedia.org/wikipedia/en/d/d5/Ornette_Coleman_The_Shape_of_Jazz_to_Come.jpg',
      altText: "Ornette Coleman's 'The Shape of Jazz to Come' album cover with an abstract design.",
    },
  ],
  classical: [
    {
      title: 'Beethoven: Symphony No. 9',
      artist: 'Berlin Philharmonic, Herbert von Karajan',
      genre: 'Classical',
      price: '$39.99',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Beethoven_Symphony_No_9_Karajan_1962.jpg',
      altText: "Beethoven's Symphony No. 9 album cover featuring the Berlin Philharmonic.",
    },
    {
      title: 'The Four Seasons',
      artist: 'Vivaldi, Itzhak Perlman',
      genre: 'Classical',
      price: '$29.99',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Vivaldi_-_The_Four_Seasons_-_Perlman_-_album_cover.jpg',
      altText: "Vivaldi's 'The Four Seasons' album cover with a portrait of Itzhak Perlman.",
    },
    {
      title: 'The Planets',
      artist: 'Gustav Holst, London Philharmonic',
      genre: 'Classical',
      price: '$34.99',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Holst_The_Planets_Album.jpg',
      altText: "Gustav Holst's 'The Planets' album cover featuring celestial imagery.",
    },
    {
      title: 'The Rite of Spring',
      artist: 'Igor Stravinsky, Chicago Symphony Orchestra',
      genre: 'Classical',
      price: '$32.99',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/57/Stravinsky_-_The_Rite_of_Spring.jpg',
      altText: "Stravinsky's 'The Rite of Spring' album cover with dynamic, abstract art.",
    },
    {
      title: 'Requiem',
      artist: 'Mozart, Vienna Philharmonic',
      genre: 'Classical',
      price: '$37.99',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Mozart_Requiem_Album.jpg',
      altText: "Mozart's 'Requiem' album cover with a classical portrait of the composer.",
    },
  ],
}

export default albums
