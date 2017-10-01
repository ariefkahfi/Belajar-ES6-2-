#Belajar-ES6-2


1.Cara setup babel (compiler javascript ES6 agar support 'old-school' browser)<br/>

2.buat folder package.json di root project folder
       

3.lakukan npm install 
 
         ////setup build dengan Babel CLI (Javascript ES6 compiler)
            npm install --save-dev babel-cli<br/>
            npm install babel-preset-env --save-dev<br/>
         ////setup build dengan Babel CLI (Javascript ES6 compiler)
 
 
4.setelah instalasi,tambahkan ini di package.json<br/>
  ```
         "scripts": {
            "build": "babel src -d lib"
          },
  ```
5.buat file .babelrc,tambahkan ini
  ```
           {
            "presets":["env"]
           }
  ```
