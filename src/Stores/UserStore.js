import {observable, action, computed} from 'mobx'

class UserStore {
    @observable userEmail
    @observable userToken  

    @action addUserData = (data) => {
        this.userEmail = data.userEmail
        this.userToken = data.userToken
    }

    @computed get userData () {
        return {
            email : this.userEmail,
            token : this.userToken
        }
    }
    
}

const store = new UserStore()
export default store