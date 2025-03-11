import {FlatList, View} from 'react-native';
import styles from './RulesModal.Styles.tsx';
import {CheckRadioGroup, HeaderUI, TextUI} from '../../index.tsx';
import RulesAndRegulations from '../../../common/utils/RulesAndRegulations.ts';
import useRulesViewModal from './RulesModal.ViewModal.ts';
import { useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/Store.ts';

const RulesModal = () => {

  const {handlerButton, handlerAcceptingRules} = useRulesViewModal();

  const {acceptingRules}=useSelector((state:RootState) => state.ModalApp);


  return (
    <View style={styles.container}>
      <HeaderUI
        disabledButtonLeft
        title={'قواین و مقررات'}
        disabledButtonRight={false}
        onPressLeft={handlerButton}
        onPressRight={handlerButton}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={RulesAndRegulations}
        contentContainerStyle={styles.bodyModal}
        renderItem={({item}) => (
          <View style={styles.everyPart}>
            <TextUI text={item?.title} bold />
            <TextUI
              text={item?.description}
              numberOfLines={10}
              style={styles.text}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.rulesWrapper}>
            <CheckRadioGroup
              type={'checkBox'}
              disabled={false}
              selectBox={acceptingRules}
              onPressSelection={handlerAcceptingRules}
            />

            <TextUI
              style={styles.rules}
              text={'قوانین و مقررات را مطالعه کردم و قبول میکنم.'}
            />
          </View>
        )}
      />
    </View>
  );
};

export default RulesModal;
