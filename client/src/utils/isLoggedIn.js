import API from "./API";

// const isLoggedIn = (history,callback) => {
// 	console.log("AuthCheck");
// 	if(localStorage.getItem('jwt')){
// 		API.checkLoggedIn(localStorage.getItem('jwt'))
// 			.then(res=>{
// 				// console.log(res);
// 				// return res;
// 				callback(res);
// 			})
// 			.catch(err=>{
// 				if (err) history.push('/login');
// 			});
// 	}
// 	else{
// 		history.push('/login');
// 	}
// }

const isLoggedIn = (callback,callback2) => {
	console.log("AuthCheck");
	if(localStorage.getItem('jwt')){
		API.checkLoggedIn(localStorage.getItem('jwt'))
			.then(res=>{
				console.log(res);
				callback(res);
			})
			.catch(err=>{
				return(false)
			});
	}
	else{
		console.log('not logged in');
		callback2()
		return(false)
	}
}

export default isLoggedIn;