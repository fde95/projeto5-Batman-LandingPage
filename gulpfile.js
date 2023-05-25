const gulp = require('gulp'); //importando o Gulp
const sass = require('gulp-sass')(require('sass')); //importando o Gulp-Less e o Less
const imagemin = require('gulp-imagemin'); //importando o Compressor de Imagens
const uglify = require('gulp-uglify'); //importando o Compressor do JS

function scripts (){
    return gulp.src('./src/scripts/*.js') //selecionando arquivos JS
    .pipe(uglify()) //Minificando arquivos
    .pipe(gulp.dest('./dist/js')) //salvando arquivos minificados
}

function styles(){ //função de compressão do arquivo LESS para CSS
    return gulp.src('./src/styles/*.scss') //acessando arquivos LESS
        .pipe(sass({ outputStyle: 'compressed' })) //comprimindo arquivo e convertendo
        .pipe(gulp.dest('./dist/css')); //direcionando para pasta de destido
}

function images(){ //função de compressão de Imagens
    return gulp.src('./src/images/**/*') //acessando a pasta de imagens
        .pipe(imagemin()) //comprimindo imagens
        .pipe(gulp.dest('./dist/images')); //direcionando imagens comprimidas para destido
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function(){ //função de monitoramento do Gulp
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}