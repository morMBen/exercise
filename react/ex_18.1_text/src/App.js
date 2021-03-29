import Text from './Text';
const text = 'loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f loasdlf dlfasdl;f ';

const maxLength = 50;
const App = () => {
  return (
    <Text
      text={text}
      maxLength={maxLength}
    />
  );
}

export default App;
