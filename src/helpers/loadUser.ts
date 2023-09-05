import { Bytes } from "@graphprotocol/graph-ts"
import { User } from "../../generated/schema"

/**
 * Look up User or create a new one if dne
 */
export function loadUser(id: Bytes): User {
    let user = User.load(id)
    if (user == null) {
        user = new User(id)
        user.save()
    }
    return user
}
