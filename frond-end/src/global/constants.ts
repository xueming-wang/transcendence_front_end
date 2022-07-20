export const API_HOST = "http://localhost:3000"

export  const GetData = async(url: string) => {
	try {
    const response = await fetch(url)
      if (response.status === 200) {
        return await response.json();
      }
			else return null
  } catch (err) {
    return null
  } 
}


export const PostData = async(url: string, data: any) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({data}),
			credentials: 'include'
		})

		if (response.status === 200) {
		  return await response.json();
		}
		else return null
	}
	catch(err) {
	  return null
	}
}
//
// export const PutData = async(data:any) => {
//
//   const dataInForm: any = {}
//
//   const queryParams = 'username=';
//   const name = dataInForm['username'];
// 	const endpoint = API_GET_DATA + queryParams + name
// 	console.log(endpoint);
//
// 	try {
// 		const response = await fetch(endpoint, {
// 		method: "PUT",
// 		headers: {
// 		  'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify({data})
// 		})
//     // if (response.ok) {
//     //   const jsonResponse = await response.json();
//     //   // Code to execute with jsonResponse
//     // }
// 	} catch(err) {
// 	  console.log(err);
// 	}
//  }