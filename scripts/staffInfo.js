$(function(){
    var pageArray = [];

    //获取记录条数
    var liCount = 0;
    var $tr = $('tr');
    $tr.each(function(){
        if ($(this).attr('id')=="table-title") {}
        else{
            liCount++;
        }
    });
    var PageSize  = 10;//设置每页，你准备显示几条
    var PageCount  = Math.ceil(liCount/PageSize);//计算出总共页数
    
    var i=0;
    for(i=1; i<=PageCount; i++){
        $('<li id="page-li"><a class="page-a" href="#" pageNum="'+(i-1)+'" >第'+i+'页</a></li>').appendTo('.pagination');//显示分页按钮
    }
    // 获取整个table中的所有行值并存入pagearray
    var $tr = $('tr');
    $tr.each(function(){
        if ($(this).attr('id')=="table-title") {}
        else{
            pageArray.push(this);
        }
    });
    // 清空table 只显示第一页数据
    $('#table-body').html('');
    for(i=0;i<PageSize;i++){
        $('#table-body').append(pageArray[i]);
    }
    // 显示分页内容的方法
    function showPage(whichPage){
        $('#table-body').html('');
        var page = whichPage;
        var initial = (page)*PageSize;
        var end = (++page)*PageSize;
        for(i = initial; i < end ; i++){
            $('#table-body').append(pageArray[i]);
        }
    }
    // 当分页符号被点击时的效果
    $('.page-a').click(function(){
        showPage($(this).attr('pagenum'));
    })
    // 模态框设置
    $('.btn-danger').click(function(){
        var staffName = $(this).parent().prev().prev().prev().html();
        var staffId = $(this).parent().prev().prev().prev().prev().html();
        $('#delete_modal').html('你确定要移除员工'+staffName+'（编号'+staffId+'）吗？');
    })
});