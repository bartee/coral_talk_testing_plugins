const UserModel = require('models/user');
const gravatar = require('gravatar');

// Load some config from the environment. This could be changed to a settings
// option later if you want to go that route.
const DEFAULT_AVATAR = process.env.DEFAULT_AVATAR;

module.exports = {

	// The new type definitions provides the new "avatar" field needed to inject
	// into the User type.
	typeDefs: `
		type User {
			avatar: String
		}
	`,

    // resolvers will override the username field in the user to ensure that we
    // can return our custom screenname instead of the standard username.
    resolvers: {
        User: {
            avatar(user) {
            	if (user && user.profiles[0] && user.profiles[0].provider == 'local') {
                    gravatar_options = {
                        s: 50,
                        protocol: 'https'
                    }
            		return gravatarUrl(user.profiles[0].id, gravatar_options);
            	}
            }
        }
    }
}
