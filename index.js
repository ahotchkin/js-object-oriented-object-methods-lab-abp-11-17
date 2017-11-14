function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function veto(){
    return ("No, I must disagree")
  }
  this.approve = function approve(){
    return ("You can do that!")
  }
  this.doCharity = function doCharity(){
    return ("I like to help people.")
  }
}
