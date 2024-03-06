// video
let resepVideo = [
  {
    judul: "Masak Nasi Goreng Spesial",
    detail: "Tutorial Nasi Goreng Spesial Menggunakan Ayam dan Kecap",

    video: "https://www.youtube.com/embed/Js9FXCkn798?si=XU6wbGSymicbMOol",
  },
  {
    judul: "Tutorial Ayam Bakar Madu",
    detail: "Tutorial Ayam Bakar Madu spesial khas Bali.",

    video: "https://www.youtube.com/embed/l-AVJdfZj_Y?si=Zsp5EUMf0fiVMBr-",
  },
  {
    judul: "Pasta Carbonara Ala Dapur Akia",
    detail: "Tutorial Pasta Carbonara Ala Dapur Akia spesial ",

    video: "https://www.youtube.com/embed/QQ8VoutYUp8?si=cm15guC12tDYWAIT",
  },
  // tambah lebih banyak resep makanan di sini
];

let resepContainer = document.getElementById("resepContainer");

resepVideo.forEach((resep) => {
  // elemen HTML untuk setiap resep
  let resepElement = document.createElement("div");
  resepElement.className = "card";
  resepElement.innerHTML = `
            <iframe
            src="${resep.video}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            <div class="card-text-video">
            <a href="detail_artikel.html">${resep.judul}</a>
            <p>
            ${resep.detail}
            </p>
            </div>
          `;
  // menambah elemen resep ke dalam container
  resepContainer.appendChild(resepElement);
});

// artikel

let artikel = [
  {
    judul: "10 Resep Makanan Mudah Untuk Anak Kos",
    detail: "Makanan yang mudah dibuat oleh anak kos",

    gambar: "assets/img/telor.jpeg",
  },
  {
    judul: " Masak Nasi Goreng Spesial",
    detail: "Tutorial Nasi Goreng Spesial Menggunakan Ayam dan Kecap",

    gambar: "assets/img/nasgor-1.jpeg",
  },
  {
    judul: "Tutorial Ayam Bakar Madu",
    detail: "Tutorial Ayam Bakar Madu spesial khas Bali.",

    gambar: "assets/img/ayambakarmadu.webp",
  },
  {
    judul: "Pasta Carbonara Ala Dapur Akia",
    detail: "Tutorial Pasta Carbonara Ala Dapur Akia spesial ",

    gambar: "assets/img/pasta.jpeg",
  },
  // Anda dapat menambahkan lebih banyak resep makanan di sini
];

// Mendapatkan referensi container resep
let resepArtikel = document.getElementById("resepArtikel");

// Looping melalui objek resep makanan
artikel.forEach((resep) => {
  // Membuat elemen HTML untuk setiap resep
  let resepElement = document.createElement("div");
  resepElement.className = "card-artikel";
  resepElement.innerHTML = `
  <img
  src="${resep.gambar}"
  >
  <div class="card-text-artikel">
  <a href="detail_artikel.html">${resep.judul}</a>
  <p>
  ${resep.detail}
  </p>

  </div>
      `;
  // Menambahkan elemen resep ke dalam container
  resepArtikel.appendChild(resepElement);
});
