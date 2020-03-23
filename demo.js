// 获取键盘数字
	function insert(num){
		document.form.textview.value = document.form.textview.value+num;
	}

	//=
	function equal(){
		var exp = document.form.textview.value;
		if(exp){
			document.form.textview.value = eval(exp);
		}
	}

	// C
	function clean(){
		document.form.textview.value = "";
	}

	// <
	function back(){
		var exp = document.form.textview.value;
		document.form.textview.value = exp.substring(0,exp.length-1);
	}
