<template>
  <div class="flex p-6 w-screen bg-sage">
    <div class="flex flex-col p-4 w-3/4">
      <span><h1 class="text-soil text-7xl font-title">RECORD STORE</h1></span>
      <div class="p-4 gap-4 items-center flex justify-center w-full mt-3 mb-6">
        <button
          @click="selectedGenre = null"
          class="px-4 py-2 bg-olive text-xl font-sans text-white shadow-md rounded-md"
        >
          All
        </button>
        <button
          v-for="genre in genres"
          :key="genre"
          @click="selectedGenre = genre"
          class="px-4 py-2 bg-olive text-xl font-sans text-white rounded-md"
        >
          {{ genre }}
        </button>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full"
      >
        <AlbumCard
          v-for="album in filteredAlbums"
          :key="album.title"
          :album="album"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <div
      class="shopping-cart bg-neutral p-6 w-1/4 h-full fixed right-0 top-0 overflow-y-auto shadow-lg"
    >
      <h2 class="font-bold text-2xl mb-0.5 mt-5 text-soil">Shopping Cart</h2>
      <h3 class="text-md text-soil mb-4">Click X to remove</h3>
      <div class="cart-items mb-4">
        <ShoppingCart
          :cartItems="cart"
          @remove-one="removeOne"
          :totalCost="totalCost"
          :numberItems="numberItems"
          @remove-all="removeAll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import AlbumCard from '@/components/AlbumCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  components: {
    AlbumCard,
    ShoppingCart,
  },
  setup() {
    const albums = ref([
      {
        title: "1989 (Taylor's Version)",
        artist: 'Taylor Swift',
        genre: 'Pop',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/81JNBy4njYL._UF1000,1000_QL80_.jpg',
        altText: "Taylor Swift's '1989' album cover, featuring a Polaroid-style photo of her.",
      },
      {
        title: 'Future Nostalgia',
        artist: 'Dua Lipa',
        genre: 'Pop',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/71VQFsqlPJL._UF1000,1000_QL80_.jpg',
        altText:
          "Dua Lipa's 'Future Nostalgia' album cover featuring a dynamic photo of the artist.",
      },
      {
        title: 'Thriller',
        artist: 'Michael Jackson',
        genre: 'Pop',
        price: 34.99,
        image: 'https://m.media-amazon.com/images/I/81ogsUqshzL._UF1000,1000_QL80_.jpg',
        altText: "Michael Jackson's 'Thriller' album cover with a portrait of him.",
      },
      {
        title: 'Blackout',
        artist: 'Britney Spears',
        genre: 'Pop',
        price: 23.99,
        image: 'https://m.media-amazon.com/images/I/71Vwg8H4HbL._UF1000,1000_QL80_.jpg',
        altText: "Britney Spears's Blackout Album",
      },
      {
        title: 'Purple Rain',
        artist: 'Prince',
        genre: 'Pop',
        price: 27.99,
        image: 'https://m.media-amazon.com/images/I/914-C7OKHfL._UF1000,1000_QL80_.jpg',
        altText: "Prinec's purple rain",
      },
      {
        title: 'To Pimp a Butterfly',
        artist: 'Kendrick Lamar',
        genre: 'Rap',
        price: 34.99,
        image: 'https://m.media-amazon.com/images/I/81EISNNYwAL._UF1000,1000_QL80_.jpg',
        altText:
          "Kendrick Lamar's 'To Pimp a Butterfly' album cover with a striking image of a young black man in handcuffs.",
      },
      {
        title: 'The College Dropout',
        artist: 'Kanye West',
        genre: 'Rap',
        price: 31.99,
        image: 'https://m.media-amazon.com/images/I/7164ajA6eJS._UF1000,1000_QL80_.jpg',
        altText:
          "Kanye West's 'The College Dropout' album cover with an image of a bear mascot in a cap and gown.",
      },
      {
        title: 'Illmatic',
        artist: 'Nas',
        genre: 'Rap',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/41PY6KAPYVL._UF1000,1000_QL80_.jpg',
        altText:
          "Nas' 'Illmatic' album cover with a portrait of Nas from his youth against an urban backdrop.",
      },
      {
        title: 'The Slim Shady LP',
        artist: 'Eminem',
        genre: 'Rap',
        price: 33.99,
        image: 'https://m.media-amazon.com/images/I/81Ahe2x9qBL._UF1000,1000_QL80_.jpg',
        altText: "Eminem's 'SSLP.",
      },
      {
        title: 'Aquemini',
        artist: 'OutKast',
        genre: 'Rap',
        price: 38.99,
        image: 'https://m.media-amazon.com/images/I/815BM+mybsL.jpg',
        altText: "OutKast's 'Aquemini' album cover ",
      },
      {
        title: 'Confessions',
        artist: 'Usher',
        genre: 'R&B',
        price: 23.99,
        image:
          'https://cdn-images.dzcdn.net/images/cover/b89c20012cccb051c8a4e04d98386f95/0x1900-000000-80-0-0.jpg',
        altText: "Usher's 'Confessions' album cover with a close-up of the artist.",
      },
      {
        title: 'Channel Orange',
        artist: 'Frank Ocean',
        genre: 'R&B',
        price: 28.99,
        image: 'https://m.media-amazon.com/images/I/51Mp2uc8UFL._UF1000,1000_QL80_.jpg',
        altText: "Frank Ocean's 'Channel Orange' album cover with a minimalist design.",
      },
      {
        title: 'Voodoo',
        artist: "D'Angelo",
        genre: 'R&B',
        price: 27.99,
        image: 'https://m.media-amazon.com/images/I/81n49CDOEML._UF1000,1000_QL80_.jpg',
        altText:
          "D'Angelo's 'Voodoo' album cover with a dark, atmospheric background and a close-up photo of the artist.",
      },
      {
        title: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        genre: 'R&B',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/81Jr6DEe02L.jpg',
        altText:
          "Lauryn Hill's 'The Miseducation of Lauryn Hill' album cover with a portrait of her.",
      },
      {
        title: 'Back to Black',
        artist: 'Amy Winehouse',
        genre: 'R&B',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/71YhebDzEtL._UF1000,1000_QL80_.jpg',
        altText: "Amy Winehouse's 'Back to Black' album cover featuring her portrait.",
      },
      {
        title: 'Ctrl',
        artist: 'SZA',
        genre: 'R&B',
        price: 26.99,
        image: 'https://m.media-amazon.com/images/I/91AbZ7RgrEL._UF1000,1000_QL80_.jpg',
        altText:
          "SZA's 'Ctrl' album cover featuring her sitting in front of old computer monitors.",
      },
      {
        title: 'Kind of Blue',
        artist: 'Miles Davis',
        genre: 'Jazz',
        price: 33.99,
        image:
          'https://cdn-p.smehost.net/sites/c5d2b1a28fd246bfafed3b8dbafc1352/wp-content/uploads/2021/05/cover-45.jpg',
        altText: "Miles Davis' 'Kind of Blue' album cover with an abstract design.",
      },
      {
        title: 'A Love Supreme',
        artist: 'John Coltrane',
        genre: 'Jazz',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/61ffflzj4xL._UF1000,1000_QL80_.jpg',
        altText: "John Coltrane's 'A Love Supreme' album cover symbolizing spirituality.",
      },
      {
        title: 'Mingus Ah Um',
        artist: 'Charles Mingus',
        genre: 'Jazz',
        price: 32.99,
        image: 'https://m.media-amazon.com/images/I/81DmDMv-VzL._UF1000,1000_QL80_.jpg',
        altText: "Charles Mingus' 'Mingus Ah Um' album cover with a drawing of Mingus.",
      },
      {
        title: 'Time Out',
        artist: 'The Dave Brubeck Quartet',
        genre: 'Jazz',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/81tHyH2mfuL._UF1000,1000_QL80_.jpg',
        altText:
          "The Dave Brubeck Quartet's 'Time Out' album cover with abstract geometric patterns.",
      },
      {
        title: 'The Shape of Jazz to Come',
        artist: 'Ornette Coleman',
        genre: 'Jazz',
        price: 35.99,
        image: 'https://m.media-amazon.com/images/I/81PEYjHNCJL.jpg',
        altText:
          "Ornette Coleman's 'The Shape of Jazz to Come' album cover with an abstract design.",
      },
      {
        title: 'Beethoven: Symphony No. 9',
        artist: 'Berlin Philharmonic, Herbert von Karajan',
        genre: 'Classical',
        price: 39.99,
        image:
          'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/ce/c6/9e/cec69efe-daa4-b308-905d-ec43844202e4/00028943900621.rgb.jpg/1200x1200bf-60.jpg',
        altText: "Beethoven's Symphony No. 9 album cover featuring the Berlin Philharmonic.",
      },
      {
        title: 'The Four Seasons',
        artist: 'Vivaldi, Itzhak Perlman',
        genre: 'Classical',
        price: 29.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81LUBiCSPHL._SL1200_.jpg',
        altText: "Vivaldi's 'The Four Seasons' album cover with a portrait of Itzhak Perlman.",
      },
      {
        title: 'The Planets',
        artist: 'Gustav Holst, New York Philharmonic',
        genre: 'Classical',
        price: 34.99,
        image:
          'https://img.discogs.com/_4TNGlf8h73X-mtQ3JXY5cUcs48=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7020710-1431850394-2609.jpeg.jpg',
        altText: "Gustav Holst's 'The Planets' album cover featuring angelic imagery.",
      },
      {
        title: 'The Firebird',
        artist: 'Igor Stravinsky, Chicago Symphony Orchestra',
        genre: 'Classical',
        price: 32.99,
        image:
          'https://i.discogs.com/BhY2FmwWWXJg-NpkCuiMiYQPRsnJVwGJC8M0c5nSzVU/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTMy/NzktMTIwMzM1NDc3/Ni5qcGVn.jpeg',
        altText: "Stravinsky's 'The Firebird' album cover with dynamic, abstract art.",
      },
      {
        title: 'Requiem',
        artist: 'Mozart, Vienna Philharmonic',
        genre: 'Classical',
        price: 37.99,
        image:
          'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bd/5d/56/bd5d564b-a36a-4032-cd62-42928c2f543c/00028943368827.rgb.jpg/1200x1200bf-60.jpg',
        altText: "Mozart's 'Requiem' album cover with a classical portrait of the composer.",
      },
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        genre: 'Rock',
        price: 27.99,
        image: 'https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae',
        altText: "AC/DC's 'Back in Black' album cover with a minimalist black design.",
      },
      {
        title: 'Nevermind',
        artist: 'Nirvana',
        genre: 'Rock',
        price: 30.99,
        image: 'https://m.media-amazon.com/images/I/61ZhsEYnSdL.jpg',
        altText:
          "Nirvana's 'Nevermind' album cover featuring a baby swimming toward a dollar bill.",
      },
      {
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        genre: 'Rock',
        price: 32.99,
        image: 'https://m.media-amazon.com/images/I/61hw9WloObL._UF1000,1000_QL80_.jpg',
        altText:
          "Pink Floyd's 'The Dark Side of the Moon' album cover featuring a prism and light spectrum.",
      },
      {
        title: 'Hotel California',
        artist: 'Eagles',
        genre: 'Rock',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/71rYYgYnr2L.jpg',
        altText: "Eagles' 'Hotel California' album cover featuring a sunset and hotel exterior.",
      },
      {
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        genre: 'Rock',
        price: 31.99,
        image: 'https://m.media-amazon.com/images/I/81x364UAGAL.jpg',
        altText:
          "Led Zeppelin's 'IV' album cover featuring an old painting of a man carrying sticks.",
      },
    ])

    const selectedGenre = ref(null)
    const cart = ref([])

    const genres = ['Pop', 'Rap', 'R&B', 'Jazz', 'Classical', 'Rock']

    const filteredAlbums = computed(() => {
      if (!selectedGenre.value) {
        return albums.value
      }
      return albums.value.filter((album) => album.genre === selectedGenre.value)
    })

    const totalCost = computed(() => {
      let total = 0
      cart.value.forEach((item) => {
        total += item.price
      })
      return total
    })

    const numberItems = computed(() => {
      return cart.value.length
    })

    const addToCart = (album) => {
      cart.value.push({ title: album.title, artist: album.artist, price: album.price })
    }

    const removeOne = (index) => {
      cart.value.splice(index, 1)
    }

    const removeAll = (album) => {
      cart.value = []
    }

    return {
      albums,
      selectedGenre,
      genres,
      filteredAlbums,
      cart,
      addToCart,
      totalCost,
      numberItems,
      removeAll,
      removeOne,
    }
  },
}
</script>

<style scoped></style>
