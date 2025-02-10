<template>
  <div class="genre-buttons">
    <button v-for="genre in genres" :key="genre" @click="" filterByGenre(genre)>{{ genre }}</button>
  </div>
  <div class="album-list flex flex-wrap justify-between gap-6">
    <AlbumCard v-for="album in filteredalbums" :key="album.title" :album="album" @click="" />
  </div>
</template>

<script>
import AlbumCard from '@/components/AlbumCard.vue'
export default {
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: [
        {
          title: "1989 (Taylor's Version)",
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
          altText:
            "Dua Lipa's 'Future Nostalgia' album cover featuring a dynamic photo of the artist.",
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
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Voodoo_UK.jpg/220px-Voodoo_UK.jpg',
          altText:
            "D'Angelo's 'Voodoo' album cover with a dark, atmospheric background and a close-up photo of the artist.",
        },
        {
          title: 'The Miseducation of Lauryn Hill',
          artist: 'Lauryn Hill',
          genre: 'R&B',
          price: '$24.99',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Miseducation_of_Lauryn_Hill.png/220px-The_Miseducation_of_Lauryn_Hill.png',
          altText:
            "Lauryn Hill's 'The Miseducation of Lauryn Hill' album cover with a portrait of her.",
        },
        {
          title: 'Back to Black',
          artist: 'Amy Winehouse',
          genre: 'R&B',
          price: '$29.99',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png/220px-Amy_Winehouse_-_Back_to_Black_%28album%29.png',
          altText: "Amy Winehouse's 'Back to Black' album cover featuring her portrait.",
        },
        {
          title: 'Kind of Blue',
          artist: 'Miles Davis',
          genre: 'Jazz',
          price: '$33.99',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kind_of_Blue_%281959%2C_CL_1355%29_album_cover.jpg/220px-Kind_of_Blue_%281959%2C_CL_1355%29_album_cover.jpg',
          altText: "Miles Davis' 'Kind of Blue' album cover with an abstract design.",
        },
        {
          title: 'A Love Supreme',
          artist: 'John Coltrane',
          genre: 'Jazz',
          price: '$29.99',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/John_Coltrane_-_A_Love_Supreme.jpg/220px-John_Coltrane_-_A_Love_Supreme.jpg',
          altText: "John Coltrane's 'A Love Supreme' album cover symbolizing spirituality.",
        },
        {
          title: 'Mingus Ah Um',
          artist: 'Charles Mingus',
          genre: 'Jazz',
          price: '$32.99',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Mingus_Ah_Um_-_Charles_Mingus.jpg/220px-Mingus_Ah_Um_-_Charles_Mingus.jpg',
          altText: "Charles Mingus' 'Mingus Ah Um' album cover with a drawing of Mingus.",
        },
        {
          title: 'Time Out',
          artist: 'The Dave Brubeck Quartet',
          genre: 'Jazz',
          price: '$24.99',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Time_out_album_cover.jpg/220px-Time_out_album_cover.jpg',
          altText:
            "The Dave Brubeck Quartet's 'Time Out' album cover with abstract geometric patterns.",
        },
        {
          title: 'The Shape of Jazz to Come',
          artist: 'Ornette Coleman',
          genre: 'Jazz',
          price: 35.99,
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/ShapeOfJazzToCome.jpg/220px-ShapeOfJazzToCome.jpg',
          altText:
            "Ornette Coleman's 'The Shape of Jazz to Come' album cover with an abstract design.",
        },
        {
          title: 'Beethoven: Symphony No. 9',
          artist: 'Berlin Philharmonic, Herbert von Karajan',
          genre: 'Classical',
          price: '$39.99',
          image:
            'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/ce/c6/9e/cec69efe-daa4-b308-905d-ec43844202e4/00028943900621.rgb.jpg/1200x1200bf-60.jpg',
          altText: "Beethoven's Symphony No. 9 album cover featuring the Berlin Philharmonic.",
        },
        {
          title: 'The Four Seasons',
          artist: 'Vivaldi, Itzhak Perlman',
          genre: 'Classical',
          price: '$29.99',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81LUBiCSPHL._SL1200_.jpg',
          altText: "Vivaldi's 'The Four Seasons' album cover with a portrait of Itzhak Perlman.",
        },
        {
          title: 'The Planets',
          artist: 'Gustav Holst, New York Philharmonic',
          genre: 'Classical',
          price: '$34.99',
          image:
            'https://img.discogs.com/_4TNGlf8h73X-mtQ3JXY5cUcs48=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7020710-1431850394-2609.jpeg.jpg',
          altText: "Gustav Holst's 'The Planets' album cover featuring angelic imagery.",
        },
        {
          title: 'The Firebird',
          artist: 'Igor Stravinsky, Chicago Symphony Orchestra',
          genre: 'Classical',
          price: '$32.99',
          image:
            'https://i.discogs.com/BhY2FmwWWXJg-NpkCuiMiYQPRsnJVwGJC8M0c5nSzVU/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTMy/NzktMTIwMzM1NDc3/Ni5qcGVn.jpeg',
          altText: "Stravinsky's 'The Firebird' album cover with dynamic, abstract art.",
        },
        {
          title: 'Requiem',
          artist: 'Mozart, Vienna Philharmonic',
          genre: 'Classical',
          price: '$37.99',
          image:
            'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bd/5d/56/bd5d564b-a36a-4032-cd62-42928c2f543c/00028943368827.rgb.jpg/1200x1200bf-60.jpg',
          altText: "Mozart's 'Requiem' album cover with a classical portrait of the composer.",
        },
      ],
      genres: ['Pop', 'Rap', 'R&B', 'Jazz', 'Classical'],
      selectedGenre: ' ',
    }
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter((album) => album.genre === this.selectedGenre)
    },
  },
}
</script>

<style lang="scss" scoped></style>
