// middlewares/authenticate.js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  // Obtenemos el token del header "Authorization"
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // Si no hay token, devolvemos un error 401
  if (!token) {
    return res.status(401).json({ message: 'No estás autenticado.' });
  }

  try {
    // Verificamos el token con el secreto de JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Añadimos los datos decodificados del usuario a req.user
    req.user = decoded;

    // Continuamos al siguiente middleware o controlador
    next();
  } catch (error) {
    // Si el token es inválido o expiró, devolvemos un error 401
    res.status(401).json({ message: 'Token inválido.' });
  }
};


export default authenticate;
