import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './routes';

// componente de navegação (tipo: navegação em pilha/stack)
export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
