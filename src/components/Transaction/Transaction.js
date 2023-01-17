import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpending } from "../../redux/spending/spendingActions";
import styled from "styled-components";

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Transaction() {
  const dispatch = useDispatch();
  const spendings = useSelector((state) => state.spending.spendings);
  console.log(spendings);

  useEffect(() => {
    dispatch(fetchSpending());
  }, [dispatch]);

  return (
    <TransactionContainer>
      {spendings.length > 0 &&
        spendings.map((item) => (
          <div>
            {item.note}, {item.date}, {item.amount}
          </div>
        ))}
    </TransactionContainer>
  );
}

export default Transaction;
