let item = {
    "首页": "index_1.html",
    "管理员列表": "admin.html",
    "分类列表": "category.html",
    "分类创建": "categoryCreate.html",
    "物品列表": "listItem.html",
    "资产创建": "assetsToCreate.html"
}
//事假绑定函数
function addEven(item, event, fn) {
    $(item).on(event, fn)
}
addEven('.item-box', "click", function (e) {
    let Obox = $(e.currentTarget).find('.son_box').toggleClass('son-box')
    if (this == e.currentTarget) {
        Obox.toggleClass('i_box')
    }
})

addEven('.son_box', 'click', function (event) {
    event.stopPropagation();
    if (event.target.tagName == 'A') {
        $('.son-itme').removeClass('active')
        $(event.target).parent().addClass('active').siblings().removeClass('active')
        let text = event.target.innerText
        $('#ifrom').attr('src', item[text])
    }

})
addEven('#index', 'click', function (event) {
    event.stopPropagation();
    let text = event.target.innerText
    $('#ifrom').attr('src', item[text])
})