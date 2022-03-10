module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8623926195042b5226a905958f2ecf79'),
  },
});
