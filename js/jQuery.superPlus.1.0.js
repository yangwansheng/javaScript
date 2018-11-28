;(function(factory) {
	factory(window, jQuery, document);//执行传入的方法
	//编写传入的方法
}(function(win, jq, doc) {
	//$().fn.superPlus 方法 根方法 options为添加的宽度
	$.fn.superPlus = function(obj) {
		//设置默认参数
		var setting = {
			options : 100,
			background:"blue",
			//回调事件，点击后执行
            changeAfter:null   
		};
		//使用用户的参数覆盖默认参数
		$.extend(setting,obj);
		//return 返回回调函数
		return $.each(this, function(index, obj) {
			$("<span/>").html("+").css("cursor", "pointer").click(function() {
			    //修改obj标签的宽度、背景颜色
			    $(obj).width($(obj).width() + setting.options ).css({background:setting.background});
			    //如果用户指定了回调事件
                if(setting.changeAfter)
                {
                    //执行用户带入的方法将当前对象作为参数带出
                    setting.changeAfter($(obj));//执行回调函数
                }
			}).insertAfter(obj);
		});
	}
}));