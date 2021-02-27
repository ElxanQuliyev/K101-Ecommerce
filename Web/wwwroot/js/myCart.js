$(function () {
    var getCookieVal;
    if (Cookies.get("CartProduct") != null && Cookies.get("CartProduct") != "undefined"
        && Cookies.get("CartProduct") != "") {
        getCookieVal = [...Cookies.get("CartProduct").split('-')]
    }
    let productIds = getCookieVal ?? [];
    $(".addToCart").click(function () {
        const proId = $(this).attr("pro-id");
        productIds.push(proId);
        Cookies.set("CartProduct", productIds.join("-"), {expires:7})
        Swal.fire(
            'Product Added to Cart!',
            'Halal Olsun!',
            'success'
        )
    })
})
