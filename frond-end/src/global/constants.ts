export const API_HOST = "http://localhost:3000"
export const API_GET_DATA = `${API_HOST}"/users?"`

export  const GetData = async() => {  //括号里setuser
  const queryParams = 'username='; 
  const endpoint = API_GET_DATA + queryParams // + username
  try {
    const response = await fetch(endpoint) //???
      if (response.ok) {
        return await response.json();  //获取数据信息
      }
      throw new Error('Request failed!');
  } catch (err) {
    console.log(err);
  } 
}


export const PostData = async(data:any) => {

  const dataInForm: any = {}

  const queryParams = 'username='; 
  const name = dataInForm['username'];
	const endpoint = API_GET_DATA + queryParams + name
	console.log(endpoint);

	try {
		const response = await fetch(endpoint, {
		method: "POST",
		headers: {
		  'Content-type': 'application/json',
		},
		body: JSON.stringify({data})
		})
		if (response.ok) {
		  const jsonResponse = await response.json();
		  // Code to execute with jsonResponse
		}
	} catch(err) {
	  console.log(err);
	}
}

export const PutData = async(data:any) => {

  const dataInForm: any = {}

  const queryParams = 'username='; 
  const name = dataInForm['username'];
	const endpoint = API_GET_DATA + queryParams + name
	console.log(endpoint);

	try {
		const response = await fetch(endpoint, {
		method: "PUT",
		headers: {
		  'Content-type': 'application/json',
		},
		body: JSON.stringify({data})
		})
    // if (response.ok) {
    //   const jsonResponse = await response.json();
    //   // Code to execute with jsonResponse
    // }
	} catch(err) {
	  console.log(err);
	}
 }


/*

.then  (onFulfilled, onRejected) is a higher-order function— it takes two callback functions as arguments.and it should contain the logic for the promise resolving. 
The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
importante de .then() est qu'il renvoie toujours une promesse.

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);

every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

//.then
prom
  .then((resolvedValue) => { 
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => { 
    console.log(rejectionReason);
  });

//.cath()
  prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });


  checkInventory(order)
.then(handleSuccess)
.catch(handleFailure);




//
checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray); 
  (运行新的Promise  processPayment(([order, total]))函数 )
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray); 
   (运行新的Promise   shipOrder(([order, trackingNum]))函数 )
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


//
返回一个数组
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });


const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');
Promise.all([checkSunglasses, checkPants,checkBags])
.then(onFulfill)
.catch(onReject);

const promise1 = examplePromise1.then(onFulfill, onReject);
const promise2 = examplePromise2.then(onFulfill).catch(onReject);

let promiseChain = link(true);
 
promiseChain
.then( data => {  
   console.log(data + " 1");
   return link(true);
})
.then( data => {
   console.log(data+ " 2");
   return link(true);
});  
//output: data + " 1" 
			data+ " 2"


//async
function nativePromise(){
  return new Promise((resolve, reject) => {
      resolve('yay!');
  })
}
==async 写法
async function asyncPromise(){
  return 'yay!';  //没有resolve reject
}

//await ，await 运算符会返回 promise 的已解析值
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?');
    setTimeout(() => {
      console.log('Should I make ramen...?');
      setTimeout(() => {
        console.log('Should I make eggs...?');
        setTimeout(() => {
          console.log('Should I make chicken?');
          resolve('beans');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
};


//1 .2 3 打印
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

//带参数的 	await
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

//error
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
包含多个不依赖于彼此执行结果的 Promise 怎么办？
同时执行异步操作
async function concurrent() {
	const firstPromise = firstAsyncThing();
	const secondPromise = secondAsyncThing();
   console.log(	`with string ${await firstPromise}, ${await secondPromise}. ` );
}

//promise all
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}


//htp 

//客户
GET / HTTP/1.1
Host: www.codecademy.com

响应头
HTTP/1.1 200 OK
Content-Type: text/html

HTTP/1.1 404 NOT FOUND

//GET  请求
GET Requests using Fetch

fetch('https://api-to-call.com/endpoint')                      ------sends request
.then() 方法只有在 fetch() 的承诺状态被解决后才会触发。

fetch('http://api-to-call.com/endpoint')             ------sends request
.then(response=> { 
	if (response.ok) {
		return response.json();                ----所有数据
	}
	throw new Error( 'Request failed!') :                 
}(第一个参数拿 GET到), networkError => console. log(networkError.message)(第二个参数 没有服务器))   --------------handles errors
.then (jsonResponse => {           (前一个then() 方法完成运行拿到response json且没有错误后运行())     -------------fecth 成功handles success
		// Code to execute with jsonResponse   
	}, networkError => {               --------可有第二个参数 
    console.log(networkError.message);
}));          

//例子
const url = 'https://api.datamuse.com/words?sl=';
const inputField = document.querySelector('#input');
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + wordQuery;
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {                ---------------第二个参数
    console.log(networkError.message)
  })
  .then(jsonResponse => {            -------------第二个then 
    renderRawResponse(jsonResponse);          -----------调用renderRawResponse 函数  返回数据
	 renderResponse(jsonResponse)         --------------返回值 status
  }) 

const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }




// fetch POST 请求

fetch(http://api-to-call.com/endpoint',
{										 --------第二个参数确定此请求是 POST 请求，以及将向 API 发送什么信息。
	method: 'POST',
	headers: { 
      'Content-type': 'application/json',
      'apikey': apiKey
    },
	body: JSON.stringify({id: '200"})
})
.then (response => {               
	if (response.ok) {
		return response.json()           --------------将响应对象转换为 JSON
	}
	throw new Error ('Request failed! ');
}, networkError => console. log(networkError.message))     ---------handles errors
.then (jsonResponse => {
	// Code to execute with jsonResponse           ------------handles success
} 
)

const shortenUrl = () => {                  ---------------把我的值转换成JASOn
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
}


异步 GET 请求简介
const getData = async () => [
try {
const response = avait fetch('https://api-to-call.com/endpoint'):   ------------sends request
  if (response. ok) {  
    const jsonResponse = await response.json();       --------------handles response if successful
    // Code to execute with jsonResponse
  }
  throw new Error( 'Request failed!) :
}
catch (err) {
  console.log(err);        --------------handles response if unsuccessful
}

//例子
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
const getSuggestions = async () => {
  const wordQuery = inputField.value
  const endpoint = url + queryParams + wordQuery
  try{ 
    const response = await fetch(endpoint, {cache: 'no-cache'})
    if (response.ok) {
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  } catch (error){
    console.log(error)
  }
}

// Clear previous results and display results to webpage
// 清除以前的结果并将结果显示到网页
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//page function
const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }
    // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}


//异步 POST 请求简介
const getData = async () => {
try {
  const response = await fetch('https://api-to-call.com/endpoint', {
  method: POST
  body: JSON.stringify({id: 200})
  })
  if(response.ok)(                            - handles response if successful
      const jsonResponse = await  response.json();
    // Code to execute with jsonResponse
  }
  throw new Error( 'Request failed!") :
catch(error){
  console.log(error);
}
}

GET — retrieve a specific resource (by id) or a collection of resources
POST — create a new resource
PUT — update a specific resource (by id)
DELETE — remove a specific resource by id
*/