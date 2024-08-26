const PasswordInput = ({ id, register, showPassword, handleToggle }) => (
  <FormRowVertical error={errors?.password?.message}>
    <div style={{ position: "relative" }}>
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        id={id}
        {...register(id, {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 20,
            message: "Password must be at most 20 characters",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&#_]{6,}$/,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          },
        })}
        sx={{ backgroundColor: "rgb(247, 248, 250)" }}
      />
      <span
        onClick={handleToggle}
        style={{
          position: "absolute",
          right: "35px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  </FormRowVertical>
);
