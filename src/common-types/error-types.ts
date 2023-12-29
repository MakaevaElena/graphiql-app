type ErrorResponse = {
  status: number;
  data: {
    errors: [
      {
        message: string;
      },
    ];
  };
};

export default ErrorResponse;
