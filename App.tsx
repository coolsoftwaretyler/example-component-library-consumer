import React from 'react';
import {SafeAreaView} from 'react-native';
import {Counter} from '@counter/library';

const App = () => {
  return (
    <SafeAreaView>
      <Counter startingCount={10} />
    </SafeAreaView>
  );
};

export default App;
