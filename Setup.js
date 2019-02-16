saving account information

storeData(name, user, pass){
	var dict = []; // create an empty array

dict.push({
    key: "firstName",
    value: name
});
dict.push({
    key: "userName",
    value: user
});
dict.push({
    key: "password",
    value: pass
});
}