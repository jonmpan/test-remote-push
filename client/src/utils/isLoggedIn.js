import API from "./API";

const isLoggedIn = (history,callback) => {
	console.log("AuthCheck");
	if(localStorage.getItem('jwt')){
		API.checkLoggedIn(localStorage.getItem('jwt'))
			.then(res=>{
				// console.log(res);
				// return res;
				callback(res);
			})
			.catch(err=>{
				if (err) history.push('/login');
			});
	}
	else{
		history.push('/login');
	}
}

// const isLoggedIn = (callback) => {
// 	console.log("AuthCheck");
// 	if(localStorage.getItem('jwt')){
// 		API.checkLoggedIn(localStorage.getItem('jwt'))
// 			.then(res=>{
// 				console.log(res);
// 				callback(res);
// 			})
// 			.catch(err=>{
// 				return(false)
// 			});
// 	}
// 	else{
// 		return(false)
// 	}
// }

export default isLoggedIn;