## React -> Rails
#### 構成
* [Qiita記事](http://qiita.com/mugiwaranonoma/items/6da6d142f16a734af868)
* Rails 4.2.x
* React
* ES6
* Babel
* Webpack
* gulp
* Material Design Lite

#### セットアップ
    $ git clone https://github.com/ma3tk/react-test
    $ cd react-test
    $ bundle install
    # ※ DBの設定等を config/database.yml 等で適宜合わせよう
    $ bin/rake db:create db:migrate
    $ cd frontend
    $ npm install
    $ npm run build
    $ cd ..
    $ bin/rails s -b 0.0.0.0
