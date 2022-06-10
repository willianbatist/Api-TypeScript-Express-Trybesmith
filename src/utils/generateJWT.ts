import jwt from 'jsonwebtoken';
import User from '../interfaces/user';

function generateJWT(payload: Omit<User, 'password'>) {
  const secret = 'password';
  const jwtConfig:object = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };
  return jwt.sign({ payload }, secret, jwtConfig);
}

export default generateJWT;