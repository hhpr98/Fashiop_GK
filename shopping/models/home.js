var mysql = require('mysql');

//console.log('Đang kết nối ...');

var conn = mysql.createConnection({
    database: 'fashion_shop',
    host: "localhost",
    user: "root",
    password: ""
});

var dbs = {production: {}};

// get query
conn.connect(function(err) {
    if (err) throw err;
    console.log("Kết nối thành công!"); // Test kết nối thành công (nháy chuột phải và Run để test kết nối)

    var sql = "select* from sanpham";
    //var sql = "select* from sanpham where MaSp=1";

    conn.query(sql, function(err, results) {
        if (err) throw err;
        //console.log("Get dữ liệu product thành công!");
        dbs.production = results;
    });
});

// get all product
const allProduct = async() => {
    const results = await dbs.production;
    return results;
};

exports.allProduct=allProduct;