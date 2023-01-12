import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpending } from "../../redux/spending/spendingActions";

function Transaction() {
  const dispatch = useDispatch();
  const spendings = useSelector((state) => state);
  console.log(spendings);

  useEffect(() => {
    dispatch(fetchSpending());
  }, [dispatch]);

  return <div>Transaction</div>;
}

export default Transaction;
