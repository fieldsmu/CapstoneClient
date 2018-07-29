import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {


  transform(users: User[], searchFor: string): any[] {
    let srchUsers: User[] = [];
    for(let user of users) {
      if(
      	user.Id.toString().includes(searchFor) ||
      	user.Username.toUpperCase().includes(searchFor.toUpperCase()) ||
        user.Firstname.toUpperCase().includes(searchFor.toUpperCase()) ||
        user.Lastname.toUpperCase().includes(searchFor.toUpperCase()) ||
        user.Phone.toUpperCase().includes(searchFor.toUpperCase()) ||
        user.Firstname.toUpperCase().includes(searchFor.toUpperCase()) ||
        user.Email.toUpperCase().includes(searchFor.toUpperCase())
        // || user.IsReviewer ? 
        //   "|True|true|T|t|Yes|yes|Y|y|".includes("|"+searchFor+"|") : 
        //   "|False|false|F|f|No|no|N|n|".includes("|"+searchFor+"|")
        ) {
        srchUsers.push(user);
    }
  }
  return srchUsers;
}
}
