import useAsync from '../useAsync';
import * as workoutApi from "../../services/workoutApi"

export default function useGetWorkout() {
    //   const token = useToken();
    const token = '123321asdqw';
    const {
        data: getWorkOut,
        loading: getWorkOutLoading,
        error: getWorkOutError,
        act: getgetWorkOut,
    } = useAsync(() => workoutApi.getAll(token));

    return {
        getWorkOut,
        getWorkOutLoading,
        getWorkOutError,
        getgetWorkOut
    };
}
//
