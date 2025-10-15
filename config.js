const CONFIG = {
nama: "Awang Official ID", // Nama Store
profil: "https://img1.pixhost.to/images/9414/651131252_awang.jpg", // Url Profil
banner: "https://img1.pixhost.to/images/9416/651169886_awang.jpg, // Url Banner 
tentang: "Awang Official ID adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. Flamboyan, Kejambon, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52124, Indonesia",
sosial_media: {
  email: "awangganz47@gmail.com", // Email
  youtube: "AwangXoffc ID", // YouTube Username 
  tiktok: "Awang OFC", // Tiktok Username 
  whatsapp: "6283178194062", // WhatsApp Number 
  telegram: "awangofc" // Telegram Username
},
payment: {
  dana: "085848307759", // Payment Dana
  qris: "https://img1.pixhost.to/images/9414/651134053_awang.jpg" // Url Qris
},
telegram_api: {
  bot: "6285809369220", // Token bot father
  chatid: "7514983149" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "https://autoresbot.com/tmp_files/7da04fce-fa5f-4c36-bf04-176782764745.jpg",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 1000 },
                  { "name": "2GB RAM", "price": 2000 },
                  { "name": "3GB RAM", "price": 3000 },
                  { "name": "4GB RAM", "price": 4000 },
                  { "name": "5GB RAM", "price": 5000 },
                  { "name": "6GB RAM", "price": 6000 },
                  { "name": "7GB RAM", "price": 7000 },
                  { "name": "8GB RAM", "price": 8000 },
                  { "name": "9GB RAM", "price": 9000 },
                  { "name": "10GB RAM", "price": 10000 },
                  { "name": "Unlimited RAM", "price": 13000 }
                ]
              },
              {
                "id": 2,
                "name": "JASA RENAME SCRIPT",
                "icon": "https://autoresbot.com/tmp_files/248a2c84-f283-472d-89b7-b085dd747a80.jpg",
                "description": ".Jasa rename script apapun enc 100%,": [
                  { "name": "🥇 Biasa, "price": 9.000},
                  { "name": "🏆 premiun", "price": 20.000}
                ]
              },
              {
                "id": 3,
                "name": "JASA SEWA BOT PREMIUN",
                "icon": "https://autoresbot.com/tmp_files/dd6bcef2-00a8-473c-8d2a-ddd2e2213599.jpg",
                "description": "SEWA BOT WA PREMIUN FITURR GACORR .",
                "variants": [
                  { "name": "SEWA 3 BULAN", "price": 15.000},
                  { "name": "SEWA PERMANEN", "price": 30.000}
                ]
              },
              {
                "id": 4,
                "name": "JASA CREATE LOGO",
                "icon": "https://autoresbot.com/tmp_files/87cf73ed-a332-4fec-985d-f1b1ede9884c.jpg",
                "description": "gabisa buat logo apapun jasa aja ke awang offcial.",
                "variants": [
                  { "name": "LOGO SOSMED+ATACCKER", "price": 10.000 },
                  { "name": "LOG JB+BEBAS REQ", "price": 80000 }
                ]
              }
            ],
            "Desain": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "https://autoresbot.com/tmp_files/87cf73ed-a332-4fec-985d-f1b1ede9884c.jpg",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 2000 },
                        { name: "Logo Typography", price: 2500 },
                        { name: "Logo Mascot", price: 3000 },
                        { name: "Logo Vintage", price: 4000 },
                        { name: "Logo Modern", price: 5000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "https://autoresbot.com/tmp_files/87cf73ed-a332-4fec-985d-f1b1ede9884c.jpg",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 15000 },
                        { name: "Banner Event", price: 25000 },
                        { name: "Banner Promosi", price: 30000 }
                    ]
                },
                {
                    id: 8,
                    name: "Desain Poster",
                    icon: "https://autoresbot.com/tmp_files/87cf73ed-a332-4fec-985d-f1b1ede9884c.jpg",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 10,
                    name: "Desain Kartu Nama",
                    icon: "https://autoresbot.com/tmp_files/87cf73ed-a332-4fec-985d-f1b1ede9884c.jpg",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 10000 },
                        { name: "Premium", price: 20000 }
                    ]
                },
                {
                    id: 14,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 10000 },
                        { name: "Template Website", price: 30000 },
                        { name: "Template Sosmed", price: 15000 }
                    ]
                }
            ]
        };