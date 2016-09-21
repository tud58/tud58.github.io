app.controller('SinhVienController', function($scope, $http, API){
	$http.get(API + 'list').success(function(response){
		$scope.sinhviens = response;
	});

	$scope.modal = function(state, id){
		$scope.state = state;
		if(state == "add"){
			$scope.frmTitle = "Thêm sinh viên";
		}

		if(state == "edit"){
			$scope.frmTitle = "Sửa sinh viên";
			$scope.id = id;
			$http.get(API + 'edit/' + id).success(function(response){
		$scope.sinhvien = response;
	});
		}
		$("#myModal").modal('show');
	}

	$scope.save = function(state, id){
		if(state == "add"){
			var url = API + 'add';
			var data = $.param($scope.sinhvien);
			$http({
				method : 'POST',
				url : url,
				data : data,
				headers : {'Content-Type' : 'application/x-www-form-urlencoded'},
			})
			.success(function(response){
				console.log(response);
				location.reload()
			})
			.error(function(response){
				console.log(response);
				alert('Xảy ra lỗi vui lòng kiểm tra log');
			});
		}

		if(state == "edit"){
			var url = API + 'edit/' + id;
			var data = $.param($scope.sinhvien);
			$http({
				method : 'POST',
				url : url,
				data : data,
				headers : {'Content-Type' : 'application/x-www-form-urlencoded'},
			})
			.success(function(response){
				console.log(response);
				location.reload()
			})
			.error(function(response){
				console.log(response);
				alert('Xảy ra lỗi vui lòng kiểm tra log');
			});	
		}
	}

	$scope.confirmDelete = function(id){
		var isConfirmDelete = confirm('Bạn muốn xóa?');
		if(isConfirmDelete){
			$http.get(API + 'delete/' + id)
			.success(function(response){
				console.log(response);
				location.reload();
			})
			.error(function(){
				console.log(response);
				alert('Xảy ra lỗi vui lòng kiểm tra log');
			})
		}else{
			return false;
		}
	}
});