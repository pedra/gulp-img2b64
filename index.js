const through = require('through2')
const gutil = require('gulp-util')

function gulpPlugin(arg) {

    var c = 0

    function transform(file, encoding, callback) {

        if (file === null || file.stat.isDirectory()) return callback()
        if (/(?<=\S+)\.(jpg|png|jpeg)$/gi.test(file.path)) {

            var f = file.path.replace(/\\/g, "/").split('/').pop().split('.')
            var n = f[0]
            var t = f[1] == 'jpg' ? 'jpeg' : f[1]

            var o = new gutil.File()
            o.path = `${n}.b64`
            o.contents = Buffer.from(`data:image/${t};base64,` + file.contents.toString('base64'))

            ++c

            return callback(null, o);
        }
        return callback(null, file)
    }

    function flush(callback) {
        gutil.log(`img2b64: ${gutil.colors.yellow(c)} image${c > 1 ? 's' : ''}`)
        callback()
    }

    return through.obj(transform, flush)
}

module.exports = gulpPlugin