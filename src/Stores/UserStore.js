import {observable, action, computed} from 'mobx'

class UserStore {
    @observable userId
    @observable userEmail
    @observable userName
    @observable userToken
    @observable userType

    constructor(){
        // carregar do local storage os dados do usuário
    }

    @action addUserData = (data) => {
        this.userId = data.userId
        this.userEmail = data.userEmail
        this.userName = data.userName
        this.userToken = data.userToken
        this.userType = data.userType

        // adicionar ao local storage os dados do usuário
    }

    @computed get userData () {
        return {
            id : this.userId,
            email : this.userEmail,
            username : this.userName,
            token : this.userToken,
            userType : this.userType
        }
    }
    
}

const store = new UserStore()
export default store