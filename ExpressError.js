class ExpressError extends Error{
    consturctor(status,message){
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;