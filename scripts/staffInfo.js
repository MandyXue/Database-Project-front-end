// function delete(btn){
// 	var currentBtn = $(btn);
// 	var staffId = $(btn).parent().prevAll("#staffId").text();
// 	var json = {staffId:staffId};
// 	$.ajax({
// 		url:'delete',
// 		data:json,
// 		type:'post',
// 		dataType:'json',
// 		success:function(data){
// 			var parent = currentBtn.parent();
// 			parent.empty();
// 		}
// 	});
// }

function delete(btn){
	alert('delete');
	var currentBtn = $(btn);
	var staffId = $(btn).parent().prevAll("#staffId").text();
	var parent = currentBtn.parent();
	parent.empty();
}