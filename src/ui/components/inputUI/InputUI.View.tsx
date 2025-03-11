import {FC, forwardRef, memo} from 'react';
import {Animated, TextInput, View} from 'react-native';
import styles from './InputUI.Styles.tsx';
import {useThemeColors} from '../../../content/Themes/Themes.tsx';
import {InputUIProps} from './InputUI.Types.ts';
import useInputViewModal from './InputUI.ViewModal.ts';
import {Controller} from 'react-hook-form';

const InputUI: FC<InputUIProps> = memo(
  forwardRef<TextInput, InputUIProps>((props, ref) => {
    const Colors = useThemeColors();

    const {
      name,
      trigger,
      control,
      hint = '',
      maxLength,
      inputStyle,
      rulesValid,
      defaultValue,
      containerStyle,
      editable = true,
      multiline = false,
      keyboardType = 'default',
    } = props;

    const {
      scale,
      isFocused,
      handleBlur,
      translateY,
      translateX,
      handleFocus,
      viewTranslateY,
      handleInputChange,
    } = useInputViewModal();

    const textAlignVertical = multiline ? 'auto' : 'auto';

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {borderColor: isFocused ? Colors.primary : Colors.border},
        ]}>

        {/* انیمیشن placeholder*/}
        <Animated.View style={[styles.hintWrapper,{transform:[{translateY:viewTranslateY}]}]}>
          <Animated.Text
            style={[
              styles.hint,
              {transform: [{translateY}, {scale}, {translateX}]},
            ]}>
            {hint}
          </Animated.Text>
        </Animated.View>


        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rulesValid}
          render={({field}) => (
            <>
              <TextInput
                ref={ref}
                value={field.value}
                editable={editable}
                textAlign="right"
                multiline={multiline}
                maxLength={maxLength}
                onChangeText={text =>
                  handleInputChange(
                    text,
                    field.onChange,
                    name,
                    trigger,
                  )
                }
                cursorColor={Colors.primary}
                keyboardType={keyboardType}
                onFocus={handleFocus}
                onBlur={() => handleBlur(field.value)}
                textAlignVertical={textAlignVertical}
                style={[
                  styles.inputWrapper,
                  multiline && styles.textArea,
                  inputStyle,
                ]}
              />
            </>
          )}
        />
      </View>
    );
  }),
);

export default InputUI;
