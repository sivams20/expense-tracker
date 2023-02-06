import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpending } from "../../redux/spending/spendingActions";
import styled from "styled-components";
import { formattedDate } from "../../util/utils";
import { useNavigate } from "react-router-dom";

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
`;

const TransactionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 15px 5px;
  margin-bottom: 5px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

function Transaction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spendings = useSelector((state) => state.spending.spendings);

  useEffect(() => {
    dispatch(fetchSpending());
  }, [dispatch]);

  return (
    <TransactionContainer>
      {spendings.length > 0 &&
        spendings.map((item) => (
          <TransactionItem
            key={item._id}
            onClick={() => {
              navigate(`/spending/${item._id}`);
            }}
          >
            <Category>
              <span>{item.note}</span>
              <span>{formattedDate(item.date)}</span>
            </Category>
            <div>{item.amount}</div>
          </TransactionItem>
        ))}
    </TransactionContainer>
  );
}

export default Transaction;
