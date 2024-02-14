const mockUsers = [

    {
        id: 1, 
        name: 'John Doe',
        email: 'john.doe@email.com'
    },
    {
        id: 2, 
        name: 'Mary Doe',
        email: 'Mary.doe@email.com'
    }
]



class User{
    find(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve([...mockUsers]);

            }, 1000);

        });
    }

    insert(newUser){
        mockUsers.push(newUser);
    }

    findById(id){
        return new Promise((resolve, reject) => {
            let userNeeded;
            setTimeout(()=>{      
                mockUsers.forEach( (user) => {
                    if (user.id === id){
                        userNeeded = user;
                    }
                })
                reject();
            })
        })
    }

}

module.exports = User; // Exporting Class to be able to create multiple instances of Users 

