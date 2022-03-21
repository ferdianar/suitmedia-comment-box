## Suitmedia Comment Box

Repository
Frontend : Next.js React TypeScript JQuery SASS React Icons ( Font Awesome ) Vercel -> https://github.com/ferdianar/suitmedia-comment-box <br>
Backend  : JSON Server json Heroku -> https://github.com/ferdianar/suitmedia-fake-server-api 

URL :
Frontend : https://suitmedia-comment-box.vercel.app
Backend  : https://suitmedia-fake-server-api.herokuapp.com/comments

Install dependencies **npm install** dan Untuk menjalankan nya Project di local computer **npm run dev**

Buka di browser [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya


Ini untuk tampilan homepage yang terdiri dari navbar dengan link category login dan register. Di bawah nya adalah content yang dibagi menjadi 2 side, main content dan aside / sidebar menu. Dan saya menerapkan dinamic routing yang ketika salah satu judul artikel menu di sorot ( hover ) akan keluar link url path dengan slug di pojok bawah.

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/homeandslug.png" alt="homepage" />


Dan ketika di klik akan di arahkan ke halaman detail posts yang nanti kedepannya bisa di beri data artikel sehingga bisa lebih jelas lagi.

<img src="https://github.com/ferdianar/suitmedia-fake-server-api/blob/master/assets/slugdinamicroute.png" alt="postdetail" />
                                                                                                            
                                                                                                            
Terus dibawah ini adalah modal login. Dengan mengklik navigasi link **Login** nanti modal akan tampil. Dan disini sudah saya beri validasi ( Empty validation dan Email Validation ). Disini saya menggunakan Regular Expression ( RegExp ). Jadi seumpama tekan tombol submit dan field masih kosong, akan ada notifikasi merah di bawah field.

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/loginvalidation.png?token=GHSAT0AAAAAABMD4XBU6OHVQIB2NURQ2OUGYRXYGDQ" alt="login" />
                                                                                                                              
Dan berikutnya Register Form, Ini juga sama metode validasi nya, muncul error ketika form kosong

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/registervalidation.png?token=GHSAT0AAAAAABMD4XBUCA3M22KWMKNTSUREYRXYHHQ" alt="register" />

                                                                                                                    
Dan untuk Post Comment validasi nya semua field harus terisi, tetapi tidak perlu menggunakan email validasi. Untuk tombolnya ada submit untuk check valid, dan reset untuk menghapus semua karakter atau tulisan didalam fields. 

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/commentvalidation.png?token=GHSAT0AAAAAABMD4XBVHEPMBMQGKPXUHKDAYRXYHYQ" alt="comment" />


Dan ini ketika berada di ukuran layar diatas 1440px. Website akan otomatis terwrapping rapi, dan tidak berantakan / keluar area. Karena disini saya mensetting untuk maksimum lebar nya 1440 ( ukuran default desktop / Mac ), jadi ketika lebih dari itu otomatis akan wrap ke tengah.

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/wrapped.png?token=GHSAT0AAAAAABMD4XBVLR4M7LKT3H5X6PXCYRXYIGA" alt="wrapped" />


Dan yang terakhir ini adalah tampilan mobile, ketika ada di bawah 760px struktur nya akan seperti ini

<img src="https://raw.githubusercontent.com/ferdianar/suitmedia-fake-server-api/master/assets/previewheader.png?token=GHSAT0AAAAAABMD4XBVM3UNSUANJN236K2WYRXYIQQ"/>
