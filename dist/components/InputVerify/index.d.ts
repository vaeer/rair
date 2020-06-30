import { FC } from 'react';
import { InputProps } from 'antd/lib/input';
export interface InputVerifyProps extends InputProps {
    /** 发送验证码接口函数 */
    sendCode: () => void;
    /** 倒计时时间 */
    countDown?: number;
    /** 初始验证码文本内容 */
    initCodeText?: string;
    /** 重新发送验证码文本内容 */
    reCodeText?: string;
    /** 验证码类名 */
    codeClassname?: string;
}
export declare const InputVerify: FC<InputVerifyProps>;
export default InputVerify;
