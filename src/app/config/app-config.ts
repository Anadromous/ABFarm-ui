import { GlobalConfigModule } from '../global-config/global-config.module';

export default {
    oidc:{
        clientId: 'naj5nI80iH1v7RnWdXZ45n7Z0BH3WgHA',
        issuer: 'https://dev-m1mo4idwnzh0m2zd.us.auth0.com/oath2/default',
        redirectURI: GlobalConfigModule.appUrl+'/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}
