export const idlFactory = ({ IDL }) => {
  const ResponseData = IDL.Record({ 'status' : IDL.Bool, 'data' : IDL.Text });
  const ResponseDataDeleteQuestion = IDL.Record({
    'status' : IDL.Bool,
    'data' : IDL.Text,
  });
  const ResponseDataAllFiles = IDL.Record({
    'status' : IDL.Bool,
    'data' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const ResponseDataAllQuestions = IDL.Record({
    'status' : IDL.Bool,
    'data' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  return IDL.Service({
    'addQuestion' : IDL.Func([IDL.Text, IDL.Text], [ResponseData], []),
    'deleteQuestion' : IDL.Func([IDL.Text], [ResponseDataDeleteQuestion], []),
    'getAllFiles' : IDL.Func([], [ResponseDataAllFiles], ['query']),
    'getAllQuestions' : IDL.Func([], [ResponseDataAllQuestions], ['query']),
    'getFile' : IDL.Func([IDL.Text], [ResponseData], ['query']),
    'getQuestion' : IDL.Func([IDL.Text], [ResponseData], ['query']),
    'saveFile' : IDL.Func([IDL.Text, IDL.Text], [ResponseData], []),
    'saveFile1' : IDL.Func([IDL.Text, IDL.Text], [ResponseData], []),
    'tokeninit' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Nat8,
          IDL.Nat,
          IDL.Principal,
          IDL.Nat,
        ],
        [IDL.Principal],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
