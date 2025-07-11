import useClickAway from "@/hooks/use-click-away";
import { removeVietnameseTones } from "@/utils/utils";
import { isEmpty, isNil } from "lodash";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Empty from "../empty";
import Icons from "../icons";
import IconsSearch from "../icons/source/icon-search";
import { Label } from "../input-date/styled";
import PulseLoader from "../loading/pulse-loader";
import {
  ClearButton,
  DropDownFiled,
  DropDownWrapper,
  Error,
  List,
  ListWrapper,
  SearchIconWrapper,
  SearchInput,
  SearchWrapper,
} from "./styled";

interface Option {
  value: string | number;
  label: string;
  extra?: any;
}

interface DropDownProps {
  list?: Option[];
  title?: any;
  value?: string | number | any;
  error?: string | boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
  sizeIcon?: number;
  canRemove?: boolean;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  onChange?(value: string, option: Option): void;
  onReset?(): void;
  onBlur?(): void;
  loading?: boolean;
  isSearch?: boolean;
  positionList?: "UP" | "DOWN" | string;
}

function DropDownSearch({
  // id,
  // name,
  list = [],
  title,
  value,
  error,
  disabled,
  required = false,
  // canRemove,
  size,
  showText,
  onChange,
  loading,
  onBlur,
  isSearch,
  positionList,
  // ...props
}: DropDownProps) {
  const [show, setShow] = useState(false);
  const [indexFocus, setIndexFocus] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [focusButton, setFocusButton] = useState(false);
  const [autoComplete, setAutoComplete] = useState(false);
  const [text, setText] = useState<string | number | null>();
  const [searchKey, setSearchKey] = useState("");
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    if (showText && !list.find((item) => item.value === value)) {
      setText(value);
    } else {
      setText(null);
    }
  }, [value]);

  useEffect(() => {
    const handle = () => {
      setFocusButton(true);
    };
    if (refButton.current) {
      refButton.current?.addEventListener("focus", handle);
    }
    return () => {
      if (ref.current) {
        refButton.current?.removeEventListener("focus", handle);
      }
    };
  }, []);

  useClickAway(ref, () => {
    setShow(false);
    setFocusButton(false);
    onBlur?.();
  });

  useEffect(() => {
    setSearchKey("");
  }, [value]);

  const clearSearch = () => {
    setSearchKey("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        setShow(true);
        setIndexFocus((pre) => {
          return pre < list.length - 1 ? pre + 1 : list.length - 1;
        });
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setIndexFocus((pre) => {
          return pre > 0 ? pre - 1 : 0;
        });
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (refButton.current) {
          refButton.current.blur();
        }
        setShow(false);
        indexFocus != -1 &&
          onChange?.(list[indexFocus].value as string, list[indexFocus]);
        break;
      }
      case "Tab": {
        if (e.shiftKey) {
          setIndexFocus((pre) => {
            return pre > 0 ? pre - 1 : 0;
          });
        } else {
          setIndexFocus((pre) => {
            return pre < list.length - 1 ? pre + 1 : list.length - 1;
          });
        }
        break;
      }
    }
  };

  const handleListKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    handleKeydown(e as unknown as KeyboardEvent<HTMLDivElement>);
  };

  useEffect(() => {
    if (indexFocus >= 0 && ref.current) {
      const element: HTMLElement = ref.current.children[
        indexFocus
      ] as HTMLElement;
      element?.focus?.();
    }
  }, [indexFocus]);

  const onSelectItem = (value: string, item: Option) => {
    setShow(false);
    onChange?.(value, item);
    setIndexFocus(-1);
    setAutoComplete(false);
    setSearchKey("");
  };

  const onShowList = () => {
    if (!loading) {
      setShow(true);
      if (isSearch && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  const selectedLabel = text
    ? value
    : value && list?.find((e) => e.value === value)?.label;

  return (
    <DropDownWrapper>
      <DropDownFiled
        ref={refButton}
        size={size}
        $active={focusButton}
        tabIndex={0}
        onBlur={() => {
          setFocusButton(false);
        }}
        onKeyDown={handleKeydown}
        onClick={onShowList}
        onFocus={(e) => {
          e.preventDefault();
          setIndexFocus(-1);
        }}
        disabled={disabled}
        $error={!!error}
      >
        {loading ? (
          <PulseLoader loading />
        ) : (
          <>
            {title && (
              <Label
                $focus={focusButton}
                $required={required}
                $type={"dropdown"}
                $haveValue={
                  autoComplete ||
                  (!isEmpty(`${value}`) && !isNil(value)) ||
                  isFocus
                }
              >
                {title}
                {required && <span className="red-color">*</span>}
              </Label>
            )}
            {isSearch ? (
              <>
                <p className={value ? "value" : undefined}>{selectedLabel}</p>
                <input
                  ref={searchInputRef}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    pointerEvents: show ? "auto" : "none",
                  }}
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  onFocus={() => setFocus(true)}
                  onBlur={() => {
                    setFocus(false);
                  }}
                />
              </>
            ) : (
              <p className={value ? "value" : undefined}>{selectedLabel}</p>
            )}
          </>
        )}
        <Icons
          icon="dropdown"
          size={12}
          color={`${disabled ? "#ADADAD" : "#ea580c"}`}
        />
        {typeof error === "string" && <Error>{error}</Error>}
      </DropDownFiled>

      {show && !disabled && (
        <ListWrapper positionList={positionList} ref={ref}>
          <SearchWrapper>
            <SearchIconWrapper>
              <IconsSearch />
            </SearchIconWrapper>
            <SearchInput
              ref={searchInputRef}
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Tìm kiếm..."
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            {searchKey && (
              <ClearButton onClick={clearSearch}>
                <Icons icon="close" size={16} color="#6F7271" />
              </ClearButton>
            )}
          </SearchWrapper>
          <List onClick={() => setShow(false)}>
            {list
              .filter(
                (a) =>
                  !searchKey ||
                  removeVietnameseTones(a.label?.toLowerCase()).includes(
                    removeVietnameseTones(searchKey.toLowerCase())
                  )
              )
              .map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelectItem(item.value as string, item);
                  }}
                  onKeyDown={handleListKeyDown}
                  className={
                    value === item.value || indexFocus === index
                      ? "primary-color"
                      : ""
                  }
                >
                  <span
                    className={
                      value === item.value || indexFocus === index
                        ? "primary-color"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            {list?.length === 0 && <Empty text="Không có dữ liệu" />}
          </List>
        </ListWrapper>
      )}
    </DropDownWrapper>
  );
}

export default DropDownSearch;
