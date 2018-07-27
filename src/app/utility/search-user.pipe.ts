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
      	user.Username.includes(searchFor) ||
    		user.Firstname.includes(searchFor) ||
    		user.Lastname.includes(searchFor) ||
    		user.Phone.includes(searchFor) ||
    		user.Firstname.includes(searchFor) ||
    		user.Email.includes(searchFor)
    	  //"|True|true|T|t|Yes|yes|Y|y|".includes("|"+searchFor+"|") ||
        //"|False|false|F|f|No|no|N|n|".includes("|"+searchFor+"|")
        ) {
        srchUsers.push(user);
      }
    }
    return srchUsers;
  }
}
